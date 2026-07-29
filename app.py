from __future__ import annotations

import json
import mimetypes
import os
import sys
import traceback
import uuid
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from threading import Lock
from typing import Any
from urllib.parse import parse_qs, unquote, urlparse

BASE_DIR = Path(__file__).resolve().parent
STATIC_DIR = BASE_DIR / "static"
DATA_DIR = Path(os.environ.get("DATA_DIR", str(BASE_DIR / "data"))).resolve()
ANSWERS_PATH = DATA_DIR / "answers.json"
SEED_PATH = DATA_DIR / "seed_answers.json"
LOCK = Lock()
mimetypes.add_type("audio/mp4", ".m4a")


def now() -> str:
    return datetime.now(timezone.utc).isoformat()


def read_json(path: Path, fallback: Any) -> Any:
    if not path.exists():
        return fallback
    try:
        text = path.read_bytes().decode("utf-8-sig", errors="replace").lstrip("\ufeff")
        return json.loads(text)
    except json.JSONDecodeError:
        return fallback


def write_json(path: Path, data: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")


def load_answers() -> list[dict[str, Any]]:
    answers = read_json(ANSWERS_PATH, None)
    if isinstance(answers, list):
        return answers
    seed = read_json(SEED_PATH, [])
    if isinstance(seed, list):
        write_json(ANSWERS_PATH, seed)
        return seed
    write_json(ANSWERS_PATH, [])
    return []


def public_answer(answer: dict[str, Any]) -> dict[str, Any]:
    return {
        "id": answer.get("id", ""),
        "user_id": answer.get("user_id", ""),
        "alias": answer.get("alias", "匿名访客"),
        "kind": answer.get("kind", "question"),
        "prompt_id": answer.get("prompt_id", ""),
        "prompt": answer.get("prompt", ""),
        "content": answer.get("content", ""),
        "created_at": answer.get("created_at", ""),
    }


def sort_key(answer: dict[str, Any]) -> str:
    return str(answer.get("created_at", ""))


class Handler(BaseHTTPRequestHandler):
    server_version = "ForestShared/0.1"

    def do_GET(self) -> None:
        try:
            parsed = urlparse(self.path)
            path = unquote(parsed.path)
            if path == "/api/state":
                self.handle_state(parse_qs(parsed.query))
            elif path == "/api/health":
                self.json({"status": "ok", "answers": len(load_answers())})
            else:
                self.serve_static(path)
        except Exception as exc:
            self.error(exc)

    def do_HEAD(self) -> None:
        try:
            parsed = urlparse(self.path)
            path = unquote(parsed.path)
            if path.startswith("/api/"):
                self.json({"error": "not found"}, status=404, include_body=False)
            else:
                self.serve_static(path, include_body=False)
        except Exception as exc:
            self.error(exc)

    def do_POST(self) -> None:
        try:
            parsed = urlparse(self.path)
            path = unquote(parsed.path)
            if path == "/api/answers":
                self.handle_answer()
            else:
                self.json({"error": "not found"}, status=404)
        except Exception as exc:
            self.error(exc)

    def handle_state(self, query: dict[str, list[str]]) -> None:
        user_id = (query.get("user_id") or [""])[0]
        with LOCK:
            answers = sorted(load_answers(), key=sort_key, reverse=True)
        self.json(
            {
                "answers": [public_answer(item) for item in answers[:800]],
                "my_answers": [public_answer(item) for item in answers if item.get("user_id") == user_id],
                "stats": {
                    "answers": len(answers),
                    "users": len({item.get("user_id") for item in answers if item.get("user_id")}),
                },
            }
        )

    def handle_answer(self) -> None:
        payload = self.read_body_json()
        content = str(payload.get("content", "")).strip()
        if not content:
            raise ValueError("回答不能为空")
        if len(content) > 3000:
            raise ValueError("回答太长了，先控制在 3000 字以内")
        answer = {
            "id": uuid.uuid4().hex,
            "user_id": str(payload.get("user_id", ""))[:80],
            "alias": str(payload.get("alias", "匿名访客"))[:40] or "匿名访客",
            "kind": str(payload.get("kind", "question"))[:30],
            "prompt_id": str(payload.get("prompt_id", ""))[:80],
            "prompt": str(payload.get("prompt", ""))[:600],
            "content": content,
            "created_at": now(),
        }
        with LOCK:
            answers = load_answers()
            answers.append(answer)
            write_json(ANSWERS_PATH, answers[-5000:])
        self.json({"answer": public_answer(answer)})

    def serve_static(self, path: str, include_body: bool = True) -> None:
        if path in {"", "/", "/index.html"}:
            target = STATIC_DIR / "index.html"
        else:
            target = (STATIC_DIR / path.lstrip("/")).resolve()
            if not str(target).startswith(str(STATIC_DIR.resolve())):
                self.json({"error": "forbidden"}, status=403)
                return
        if not target.exists() or not target.is_file():
            self.json({"error": "not found"}, status=404)
            return
        body = target.read_bytes()
        total = len(body)
        status = 200
        start = 0
        end = total - 1
        range_header = self.headers.get("Range")
        if range_header and range_header.startswith("bytes="):
            raw = range_header.removeprefix("bytes=").split(",", 1)[0]
            left, _, right = raw.partition("-")
            if left:
                start = max(0, int(left))
            if right:
                end = min(total - 1, int(right))
            if not left and right:
                count = min(total, int(right))
                start = total - count
                end = total - 1
            if start > end or start >= total:
                self.send_response(416)
                self.send_header("Content-Range", f"bytes */{total}")
                self.send_header("Content-Length", "0")
                self.end_headers()
                return
            status = 206
            body = body[start : end + 1]
        self.send_response(status)
        self.send_header("Content-Type", mimetypes.guess_type(str(target))[0] or "application/octet-stream")
        self.send_header("Accept-Ranges", "bytes")
        self.send_header("Content-Length", str(len(body)))
        if status == 206:
            self.send_header("Content-Range", f"bytes {start}-{end}/{total}")
        self.end_headers()
        if include_body:
            self.wfile.write(body)

    def read_body_json(self) -> dict[str, Any]:
        length = int(self.headers.get("Content-Length", "0"))
        if not length:
            return {}
        return json.loads(self.rfile.read(length).decode("utf-8"))

    def json(self, data: Any, status: int = 200, include_body: bool = True) -> None:
        body = json.dumps(data, ensure_ascii=False, indent=2).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        if include_body:
            self.wfile.write(body)

    def error(self, exc: Exception) -> None:
        self.json({"error": str(exc), "traceback": traceback.format_exc()}, status=500)

    def log_message(self, format: str, *args: Any) -> None:
        sys.stderr.write("%s - - [%s] %s\n" % (self.address_string(), self.log_date_time_string(), format % args))


def main() -> None:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    load_answers()
    host = os.environ.get("HOST", "0.0.0.0")
    port = int(os.environ.get("PORT", "8020"))
    if len(sys.argv) > 1:
        port = int(sys.argv[1])
    server = ThreadingHTTPServer((host, port), Handler)
    print(f"Forest shared site is running at http://{host}:{port}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("Stopping server.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()





