# 林间精神世界

一个匿名问答、深度思考、16 型人格书单和文字共鸣墙组成的森林感网站。

## 功能

- 随心所欲 100 问
- 每日深度思考
- 匿名共享回答墙
- 视频感文字流动墙
- 16 型人格测试入口与书单资料卡
- 明朝体网页字体
- 白天 / 夜间模式
- 森林、流水、蝉鸣、旷野吉他与笛背景音

## 部署

推荐部署到 Render Web Service。

- Start command: `python app.py`
- Health check path: `/api/health`
- Persistent data directory: use `DATA_DIR`
- `render.yaml` 已经包含基础配置。

注意：正式共享评论需要持久化磁盘，否则服务重启后回答可能丢失。
