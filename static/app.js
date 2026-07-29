const questions = `
1 你心目中最荒谬的社会规则是什么？
2 如果能消除人类的一种情绪，你会选择什么呢？
3 如果只可以和小动物说一句对话，你会选择和谁说？说什么？
4 你有哪些“越长大越理解不了”的事？
5 如果人生是游戏，你希望新增什么技能点？
6 你觉得科技是否让我们变得更孤独？
7 如果让你收藏一种艺术品，你会选择什么呢？
8 未来教育更应该培养什么样的能力呢？
9 你如何看待"美"的标准？
10 你保留着哪些"孩子气"的坚持？
11 你最喜欢的艺术作品背后有什么故事？
12 如何看待"文化差异"与"文化融合"
13 如果必须失去一种感官，要放弃什么呢？
14 你接受「程序正义」还是「结果正义」？
15 如果给18岁的自己写信，只能写一个字，写什么呢？
16 你有哪些反常识的信念？
17 如果此刻意识重启，你想保留哪段记忆？
18 你觉得人类最伟大的发明是什么？
19 如果必须要改写一条社会规则，会选择什么？
20 你觉得自己身上最矛盾的特质是什么？
21 你如何判断自己是正在"成长"还是正在"妥协"？
22 你感到最快乐的时候在哪里，在做什么？
23 如果拍一部关于你人生经历的电影，你觉得谁最适合扮演你？
24 你有没有哪些"别人觉得奇怪"的治愈方式？
25 哪些事情让你觉得，"原来我比想象中的更强大"？
26 描述一下你心目中的完美一天
27 你有哪些"不合时宜"的坚持？
28 哪次失败反而让你感到庆幸？
29 你坚持最久的习惯是如何养成的？
30 哪些瞬间让你感觉到"我是真的变了"？
31 你为自己的哪些"不完美"感到骄傲？
32 你正在克服的恐惧是什么？
33 你什么时候会觉得自己"足够好了"？
34 你通常如何在生活中表达"感激之情"
35 你收到过的最珍贵的礼物是什么？
36 有没有一个人对你的人生产生了巨大的影响？
37 你做过哪些"不像自己"却意外正确的事情？
38 生活中你通常会如何面对他人的误解？
39 你经历过的最治愈的对话是？
40 选一个已经去过的地方再一次旅行，你会选择哪里？
41 描述一个成长最快速的时间段
42 童年的爱好和现在的爱好大部分一样吗？
43 你害怕变老吗？
44 你经历过的最深刻的告别是怎么样的？
45 你理想中的退休生活是什么样的？
46 你接受友谊渐行渐远的"自然消亡"吗？
47 在之前的某段友谊中，你有没有说过或者做过什么后悔的事情？
48 在友情中，你的哪些原则是不会妥协的？
49 你如何消化朋友或家人带来的无心伤害？
50 你对我的第一印象是什么？
51 请用三个词描述你心目中的我
52 你觉得人们经常会误解你的哪个点？
53 目前最困扰你的问题是什么？
54 你如何平衡生活中的感性与理性？举个小例子
55 你如何面对"同龄人比我成功"的焦虑？
56 对你来说，说"我爱你""对不起""我需要帮助"哪一个更难？
57 你正在进行的"静默革命"是什么？
58 你认为维持一段良好的友谊的要素是什么？
59 描述一件朋友做的最让你感动的事情？
60 你接受"所有的相遇终将分离"吗？
61 你是否有过"命中注定"的感觉？
62 如何看待"金钱与幸福"的关系？
63 你未来最想实现的三个目标是什么？
64 在你心目中，"家"的意义是什么？
65 你支持或者反对什么社会现象？为什么？
66 你如何看待爱情中的"承诺"和友情中的"承诺"？
67 你有哪些朋友专属的"特殊"仪式？
68 如果你能发明一种新语言，你会怎么设计呢？
69 如果人生能重玩，你会保留多少现有人设？
70 你有哪些"时代局限性"的困惑？
71 平行宇宙中的另一个你会是什么样的人呢？
72 如果你的人生是一本书，书名会是什么呢？
73 随心所欲畅想一下，如果人类没有语言，世界会变成什么样？
74 如果你能创造一个节日，会是什么主题？
75 如果科技能实现意识上传，你会尝试吗？
76 如果人工智能拥有了意识，你觉得它会存在性别差异吗？
77 如果电子游戏是平行宇宙入口，你会注销账号吗？
78 宇宙的终点若是一首诗或者一首歌，你觉得它的最后一句是什么？
79 你觉得你的灵魂是什么颜色的呢？代表了什么？
80 如果每个人头顶显示实时情绪弹幕，沟通会更顺利吗？
81 如果真理有气味，你觉得它闻起来像什么？
82 如果"爱"是一种可以量化的化学试剂，你会使用吗？
83 未来食物胶囊取代餐饮，你最舍不得什么味道？
84 如果所有人必须用肢体动作代替语言，什么动作会流行起来？
85 倘若动物统治世界，你认为哪种动物会胜出？
86 失败和从未尝试，哪一个更糟糕？
87 苦难是人成长的必经之路吗？
88 你最常戴上的面具是什么？
89 如果你的人生拥有一首主题曲，会选择哪首？为什么？
90 有什么你曾经深信不疑，后来却改变看法的观点？
91 一段关系里，嫉妒情绪有可能是良性的吗？
92 上一次在别人面前落泪是什么时候？
93 如果你可以立刻精通一项技能，你会选择什么？
94 在低谷时期，是什么爱好支撑了你？
95 哪段歌词仿佛是专门为你而写的？
96 你最喜欢哪一类美食？
97 面对压力时，你通常会如何反应？
98 有什么概念，用别的语言表达会更加贴切？
99 人工智能能够创造真正的艺术吗？
100 无知真的等同于幸福吗？`.trim().split(/\n/).map((line) => line.replace(/^\d+\s*/, ""));

const deepTopics = [
  ["家庭背景", "爱为什么会变成条件？", "写一个你熟悉的家庭场景：其中的爱是怎样被奖励、成绩、懂事、牺牲或沉默绑定起来的？"],
  ["性别差异", "男人什么时候不敢承认自己需要爱？", "从男性视角写：他明明渴望被回应，却为什么要把期待伪装成随便、玩笑或理性？"],
  ["性格形成", "讨好是一种礼貌，还是一种求生？", "回忆一个人总是先照顾别人情绪的时刻，分析它来自善良、习惯，还是早年的不安全感。"],
  ["亲密关系", "吃醋为什么需要身份？", "写一个没有资格表达嫉妒的人，他如何消化自己的失落，又怎样说服自己别越界。"],
  ["朋友关系", "朋友会不会成为第二个家庭？", "观察一个朋友如何改变你的表达方式、价值排序或安全感。"],
  ["自我叙事", "我们为什么反复讲同一个故事？", "找出你经常复述的一段经历，判断它是在解释你是谁，还是在保护你不必改变。"],
  ["边界", "冷漠有时是不是一种边界？", "写一个人被指责冷漠的场景，看他其实是在防御、休息，还是拒绝被吞没。"],
  ["社会观察", "互联网上的共鸣从哪里来？", "分析一个虚构爱情故事为什么会让陌生人代入：是情节真实，还是情绪结构真实？"]
];

const bookData = {
  INTJ: [
    { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", isbn: "9780374533557", category: "认知心理 / 判断决策", content: "拆解人如何在直觉与理性之间做判断，适合训练 INTJ 把战略判断从“感觉正确”推进到“证据稳固”。" },
    { title: "The Art of Strategy", author: "Avinash Dixit & Barry Nalebuff", isbn: "9780393337174", category: "博弈论 / 策略思维", content: "用生活与商业案例解释博弈论，帮助把复杂关系看成选择、激励与后果的系统。" },
    { title: "Range", author: "David Epstein", isbn: "9780735214507", category: "成长路径 / 通才能力", content: "反驳过早专业化的迷信，强调跨领域经验如何带来迁移能力和长期创造力。" }
  ],
  INTP: [
    { title: "Godel, Escher, Bach", author: "Douglas Hofstadter", isbn: "9780465026562", category: "意识 / 逻辑 / 递归", content: "在数学、音乐和绘画之间讨论自我意识，适合喜欢抽象结构和思想迷宫的人。" },
    { title: "The Information", author: "James Gleick", isbn: "9781400096237", category: "信息史 / 科技思想", content: "从文字、电报到计算机，讲信息如何成为现代世界的基础材料。" },
    { title: "The Beginning of Infinity", author: "David Deutsch", isbn: "9780143121350", category: "科学哲学 / 解释力", content: "把知识进步理解为不断产生更好解释的过程，适合拓展 INTP 对可能性的想象。" }
  ],
  ENTJ: [
    { title: "The Effective Executive", author: "Peter Drucker", isbn: "9780060833459", category: "管理 / 效能", content: "讨论管理者如何使用时间、判断贡献、做有效决策，是行动型人格的基础管理书。" },
    { title: "High Output Management", author: "Andrew Grove", isbn: "9780679762881", category: "组织管理 / 运营", content: "把团队产出拆成流程、杠杆和反馈，适合把野心落到真实组织执行。" },
    { title: "Good Strategy Bad Strategy", author: "Richard Rumelt", isbn: "9780307886231", category: "战略 / 商业分析", content: "区分真正战略与漂亮口号，强调诊断、指导方针和行动的一致性。" }
  ],
  ENTP: [
    { title: "The Black Swan", author: "Nassim Nicholas Taleb", isbn: "9780812973815", category: "不确定性 / 风险", content: "讨论极端事件如何改变世界，提醒 ENTP 在新奇想法之外看见风险结构。" },
    { title: "The Lean Startup", author: "Eric Ries", isbn: "9780307887894", category: "创业 / 实验", content: "用最小可行产品和快速迭代验证想法，适合把点子从兴奋推进到现实反馈。" },
    { title: "Antifragile", author: "Nassim Nicholas Taleb", isbn: "9780812979688", category: "反脆弱 / 系统思维", content: "解释有些系统会从波动中变强，适合理解混乱、试错和机会之间的关系。" }
  ],
  INFJ: [
    { title: "Man's Search for Meaning", author: "Viktor E. Frankl", isbn: "9780807014271", category: "意义感 / 心理疗愈", content: "从极端处境中讨论人如何寻找意义，适合把敏感与责任感转化为内在支点。" },
    { title: "The Artist's Way", author: "Julia Cameron", isbn: "9780143129257", category: "创造力 / 自我修复", content: "通过晨间书写和创意练习恢复表达力，适合长期压抑灵感的人。" },
    { title: "The Road Less Traveled", author: "M. Scott Peck", isbn: "9780743243155", category: "心理成长 / 亲密关系", content: "把爱、纪律和精神成长放在一起讨论，帮助 INFJ 区分拯救欲与成熟的爱。" }
  ],
  INFP: [
    { title: "Letters to a Young Poet", author: "Rainer Maria Rilke", isbn: "9780393310399", category: "文学书信 / 自我确认", content: "用安静的书信谈孤独、创作和内心生活，适合保护 INFP 的柔软与独立。" },
    { title: "The Little Prince", author: "Antoine de Saint-Exupery", isbn: "9780156012195", category: "寓言 / 爱与责任", content: "以童话形式谈驯养、分别和珍视，适合把情感直觉重新说清楚。" },
    { title: "The Anthropocene Reviewed", author: "John Green", isbn: "9780525555216", category: "随笔 / 世界观察", content: "给日常事物打分，温柔地承认生活荒谬又值得继续。" }
  ],
  ENFJ: [
    { title: "Nonviolent Communication", author: "Marshall B. Rosenberg", isbn: "9781892005281", category: "沟通 / 共情", content: "用观察、感受、需要和请求重建对话，适合把照顾别人变成更清晰的表达。" },
    { title: "Daring Greatly", author: "Brene Brown", isbn: "9781592408412", category: "脆弱 / 关系勇气", content: "讨论羞耻感与脆弱如何影响关系，让领导和亲密不只靠强撑。" },
    { title: "The Art of Gathering", author: "Priya Parker", isbn: "9781594634932", category: "社群 / 聚会设计", content: "讲如何设计有意义的相聚，适合擅长连接他人的 ENFJ 做出更有边界的场域。" }
  ],
  ENFP: [
    { title: "Big Magic", author: "Elizabeth Gilbert", isbn: "9781594634727", category: "创造力 / 灵感", content: "把创作看成轻盈而持续的实践，适合把热情从想象落到作品。" },
    { title: "Steal Like an Artist", author: "Austin Kleon", isbn: "9780761169253", category: "创意方法 / 表达", content: "把灵感来源、模仿和输出讲得很直接，适合快速启动创作循环。" },
    { title: "Impro", author: "Keith Johnstone", isbn: "9780878301171", category: "即兴 / 表演心理", content: "通过即兴戏剧讨论状态、反应和故事生成，贴合 ENFP 的现场感。" }
  ],
  ISTJ: [
    { title: "Atomic Habits", author: "James Clear", isbn: "9780735211292", category: "习惯 / 自我管理", content: "把习惯拆成提示、渴望、反应和奖励，适合把稳定性变成长期复利。" },
    { title: "Getting Things Done", author: "David Allen", isbn: "9780143126560", category: "效率系统 / 清单", content: "建立收集、整理、执行和回顾系统，减少脑内负担。" },
    { title: "The Checklist Manifesto", author: "Atul Gawande", isbn: "9780312430009", category: "流程 / 医疗与工程", content: "说明清单如何降低复杂工作中的失误，适合重视可靠性的人。" }
  ],
  ISFJ: [
    { title: "The Gifts of Imperfection", author: "Brene Brown", isbn: "9781592858491", category: "自我接纳 / 羞耻疗愈", content: "鼓励放下完美表现，学习以真实而非过度付出来获得连接。" },
    { title: "Quiet", author: "Susan Cain", isbn: "9780307352156", category: "内向者 / 社会心理", content: "为安静、谨慎和深度恢复价值感，适合不想被外向标准吞没的人。" },
    { title: "The Little Book of Hygge", author: "Meik Wiking", isbn: "9780062658807", category: "生活方式 / 安定感", content: "讲日常舒适、亲密和小仪式如何构成可持续的幸福感。" }
  ],
  ESTJ: [
    { title: "Measure What Matters", author: "John Doerr", isbn: "9780525536222", category: "目标管理 / OKR", content: "用目标与关键结果让团队对齐，适合把执行力升级为组织节奏。" },
    { title: "Radical Candor", author: "Kim Scott", isbn: "9781250235374", category: "管理沟通 / 反馈", content: "强调直接挑战与真诚关心并存，帮助强执行者减少压迫感。" },
    { title: "Principles", author: "Ray Dalio", isbn: "9781501124020", category: "原则 / 决策系统", content: "把个人和组织决策沉淀成原则，适合喜欢规则、复盘和可复制方法的人。" }
  ],
  ESFJ: [
    { title: "How to Win Friends and Influence People", author: "Dale Carnegie", isbn: "9780671027032", category: "人际关系 / 影响力", content: "用具体场景讲尊重、倾听和赞赏，适合把社交直觉变成更稳定的关系能力。" },
    { title: "The 5 Love Languages", author: "Gary Chapman", isbn: "9780802412706", category: "亲密关系 / 爱的表达", content: "把爱分成肯定、陪伴、礼物、服务和肢体接触，帮助减少表达错位。" },
    { title: "Together", author: "Vivek H. Murthy", isbn: "9780062913296", category: "孤独 / 社会连接", content: "从公共健康角度看孤独问题，适合关心社群和情感支持的人。" }
  ],
  ISTP: [
    { title: "Zen and the Art of Motorcycle Maintenance", author: "Robert M. Pirsig", isbn: "9780060839871", category: "技术哲学 / 生活修行", content: "把修车、旅行和“质量”问题放在一起，适合用动手理解世界的人。" },
    { title: "How Things Work", author: "Louis A. Bloomfield", isbn: "9781119013843", category: "物理 / 机制理解", content: "从日常物品解释物理原理，满足 ISTP 对系统如何运作的好奇。" },
    { title: "Shop Class as Soulcraft", author: "Matthew B. Crawford", isbn: "9780143117469", category: "手艺 / 工作意义", content: "讨论手工劳动、专注和真实反馈，适合反思技术与生活的关系。" }
  ],
  ISFP: [
    { title: "The Creative Act", author: "Rick Rubin", isbn: "9780593652886", category: "艺术创作 / 感知", content: "把创作视为倾听世界和调整感受力，适合重视审美直觉的人。" },
    { title: "Ways of Seeing", author: "John Berger", isbn: "9780140135152", category: "艺术观看 / 视觉文化", content: "训练如何看图像、权力和观看者位置，增强审美判断的语言。" },
    { title: "The War of Art", author: "Steven Pressfield", isbn: "9781936891023", category: "创作阻力 / 行动", content: "把拖延和恐惧命名为阻力，提醒创作者每天回到作品里。" }
  ],
  ESTP: [
    { title: "Never Split the Difference", author: "Chris Voss", isbn: "9780062407801", category: "谈判 / 高压沟通", content: "用谈判案例讲倾听、标注情绪和策略让步，适合现场反应快的人。" },
    { title: "The Art of Learning", author: "Josh Waitzkin", isbn: "9780743277464", category: "竞技 / 学习方法", content: "从象棋和太极讲高水平学习，适合把胜负经验转成可迁移能力。" },
    { title: "Shoe Dog", author: "Phil Knight", isbn: "9781501135910", category: "商业传记 / 冒险", content: "讲 Nike 早期创业的混乱、胆量和坚持，适合行动派理解长期冒险。" }
  ],
  ESFP: [
    { title: "Designing Your Life", author: "Bill Burnett & Dave Evans", isbn: "9781101875322", category: "人生设计 / 选择", content: "用设计思维做人生原型，适合把体验欲转化为可尝试的生活方案。" },
    { title: "Show Your Work!", author: "Austin Kleon", isbn: "9780761178972", category: "表达 / 作品展示", content: "鼓励公开过程、持续分享和建立连接，适合愿意把生活变成作品的人。" },
    { title: "The Creative Habit", author: "Twyla Tharp", isbn: "9780743235273", category: "创作纪律 / 表演艺术", content: "从编舞经验讲习惯、准备和练习，让灵感有固定的落点。" }
  ]
};
const healingQuotes = [
  ["春天", "我们不能开花，生叶，\n也没有新的歌，\n但春天淹没了我们。\n我们的呼吸汇入春天的海，\n我们变成阳光里的微尘。"],
  ["文明与荒野", "模糊文明与荒野的边界，\n风息与土壤隐秘交换讯息。\n浓郁的榛果香气与天然的纯粹相融，\n一味敬大地，一味向野而生。"],
  ["彼得·渥雷本《树的秘密生命》", "树木将时间织进木质，\n春抽芽，冬静立，\n以百年为息，\n以生长为永恒的应答。"],
  ["谷川俊太郎《树荫》", "太阳注视着，\n树木也凝视着\n我遗忘的\n和我数不清的记忆。"],
  ["蒋勋《孤独六讲》", "孤独是一颗长满可能的树，\n在无人经过的荒野里，\n它自己开花，自己凋落。"],
  ["马特·海格《活下去的理由》", "看树。\n靠近树。\n种树。\n因为树很棒。"],
  ["伍尔夫《海浪》", "生命就像树一样会生长年轮。\n就像一棵树，\n叶子总会落地。"],
  ["惠特曼《我们俩，被愚弄了那么久》", "我们成为大树、树干、树叶、树根、树皮。\n我们深埋在地下，\n我们是岩石，\n我们是橡树，\n在旷野里并排生长。"],
  ["林间精神世界", "人会在绿意中长出生命力。"]
];
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);

let uid = localStorage.forest_uid || (localStorage.forest_uid = `u${Math.random().toString(16).slice(2, 8)}`);
let alias = `林间访客 ${uid.slice(-4).toUpperCase()}`;
let currentQuestion = { id: "Q1", text: questions[0] };
let currentDeep = null;
let feed = "all";
let answers = [];
let audio = { ctx: null, master: null, nodes: [], playing: false, element: null };

$("#alias").textContent = alias;

async function api(path, options) {
  const response = await fetch(path, options);
  const text = await response.text();
  const data = text ? JSON.parse(text) : {};
  if (!response.ok) throw new Error(data.error || "请求失败");
  return data;
}

async function loadAnswers() {
  const data = await api(`/api/state?user_id=${encodeURIComponent(uid)}`);
  answers = data.answers || [];
  $("#mineCount").textContent = (data.my_answers || []).length;
  $("#allCount").textContent = data.stats?.answers || answers.length;
  renderFeed();
  renderMotionWall();
}

function drawQuestion(number) {
  const index = Math.min(100, Math.max(1, Number(number) || 1));
  currentQuestion = { id: `Q${index}`, text: questions[index - 1] };
  $("#num").value = index;
  $("#qBadge").textContent = `Q ${index}`;
  $("#qText").textContent = currentQuestion.text;
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function drawDeep() {
  const key = `forest_deep_${todayKey()}`;
  let stored = localStorage[key];
  if (!stored) {
    const item = deepTopics[Math.floor(Math.random() * deepTopics.length)];
    stored = JSON.stringify({ id: `D-${todayKey()}`, angle: item[0], title: item[1], prompt: item[2] });
    localStorage[key] = stored;
  }
  currentDeep = JSON.parse(stored);
  $("#deepAngle").textContent = currentDeep.angle;
  $("#deepTitle").textContent = currentDeep.title;
  $("#deepPrompt").textContent = currentDeep.prompt;
  $("#daily").textContent = `${todayKey()} 已抽取`;
  $("#deepDraw").disabled = true;
}

function coverUrl(isbn) {
  return `https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`;
}

function renderBooks() {
  const type = $("#type").value;
  $("#books").innerHTML = bookData[type].map((book) => `
    <article class="book">
      <div class="cover">
        <img src="${coverUrl(book.isbn)}" alt="${escapeHtml(book.title)} 书封面" loading="lazy" />
        <span>${escapeHtml(book.category)}</span>
        <strong>${escapeHtml(book.title)}</strong>
      </div>
      <div class="book-info">
        <span class="book-type">${type}</span>
        <h3>${escapeHtml(book.title)}</h3>
        <p class="book-author">${escapeHtml(book.author)}</p>
        <dl>
          <div><dt>内容</dt><dd>${escapeHtml(book.content)}</dd></div>
          <div><dt>分类</dt><dd>${escapeHtml(book.category)}</dd></div>
        </dl>
      </div>
    </article>
  `).join("");
  $(".cover img").forEach((img) => {
    img.addEventListener("load", () => {
      if (img.naturalWidth > 2 && img.naturalHeight > 2) img.parentElement.classList.add("has-image");
    });
    img.addEventListener("error", () => img.remove());
  });
}
function compact(text) {
  const value = String(text || "");
  return value.length > 42 ? `${value.slice(0, 42)}...` : value;
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "刚刚";
  return date.toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" });
}

function renderMotionWall() {
  const target = $("#motionTrack");
  if (!target) return;
  const source = answers.length ? answers.slice(0, 30) : [];
  if (!source.length) {
    target.innerHTML = '<div class="empty">回答出现后，这里会变成一面缓慢流动的文字照片墙。</div>';
    return;
  }
  target.innerHTML = source.map((item, index) => {
    const x = 3 + ((index * 17) % 86);
    const y = 5 + ((index * 29) % 78);
    const rotate = ((index % 9) - 4) * 1.25;
    const duration = 24 + (index % 7) * 4;
    const delay = -(index % 10) * 2.2;
    const scale = 0.86 + (index % 5) * 0.08;
    const tone = index % 6;
    return `
      <article class="float-note text-shot tone-shot-${tone}" style="left:${x}%; top:${y}%; --r:${rotate}deg; --dur:${duration}s; --delay:${delay}s; --s:${scale};">
        <span>${escapeHtml(item.prompt_id)} / ${escapeHtml(item.alias)}</span>
        <p>${escapeHtml(compact(item.content))}</p>
      </article>
    `;
  }).join("");
}
function renderHealingQuote() {
  const source = $("#quoteSource");
  const text = $("#quoteText");
  if (!source || !text) return;
  const item = healingQuotes[Math.floor(Math.random() * healingQuotes.length)];
  source.textContent = item[0];
  text.textContent = item[1];
}
function renderFeed() {
  let items = feed === "mine" ? answers.filter((item) => item.user_id === uid) : answers;
  if (feed === "question" || feed === "deep") items = answers.filter((item) => item.kind === feed);
  if (!items.length) {
    $("#feed").innerHTML = '<div class="empty">这里还没有回答。写下第一条，右侧会生成一张匿名卡片。</div>';
    return;
  }
  $("#feed").innerHTML = items.map((item, index) => `
    <article class="card">
      <div class="visual tone${index % 6}"><span>${escapeHtml(item.prompt_id)}</span><strong>${escapeHtml(compact(item.prompt))}</strong></div>
      <div class="body"><header><strong>${escapeHtml(item.alias)}</strong><span>${formatDate(item.created_at)}</span></header><p>${escapeHtml(item.content)}</p></div>
    </article>
  `).join("");
}

async function addAnswer(kind, content) {
  const prompt = kind === "deep" ? currentDeep : currentQuestion;
  if (!prompt) {
    alert("请先抽取今日深度问题");
    return;
  }
  const promptText = kind === "deep" ? `${prompt.title}：${prompt.prompt}` : prompt.text;
  await api("/api/answers", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ user_id: uid, alias, kind, prompt_id: prompt.id, prompt: promptText, content })
  });
  await loadAnswers();
}

function setTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.forest_theme = theme;
  $("#themeToggle").textContent = theme === "dark" ? "白天" : "夜间";
}

function createNoise(ctx, seconds = 2) {
  const buffer = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.loop = true;
  return source;
}


function playPluck(ctx, frequency, start, duration = 1.8, volume = 0.055) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  osc.type = "triangle";
  osc.frequency.setValueAtTime(frequency, start);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(1850, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.035);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(filter).connect(gain).connect(audio.master);
  osc.start(start);
  osc.stop(start + duration + 0.08);
  audio.nodes.push(osc, filter, gain);
}

function playFlute(ctx, frequency, start, duration = 1.1, volume = 0.035) {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  osc.type = "sine";
  osc.frequency.setValueAtTime(frequency, start);
  osc.frequency.linearRampToValueAtTime(frequency * 1.006, start + duration * 0.45);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(2450, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.linearRampToValueAtTime(volume, start + 0.18);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(filter).connect(gain).connect(audio.master);
  osc.start(start);
  osc.stop(start + duration + 0.08);
  audio.nodes.push(osc, filter, gain);
}

function startCountryMusic(ctx) {
  const guitar = [164.81, 196, 246.94, 293.66, 329.63, 392, 329.63, 293.66];
  const flute = [493.88, 587.33, 659.25, 739.99, 659.25, 587.33, 523.25];
  const bass = [82.41, 98, 123.47, 110];
  let round = 0;
  const playRound = () => {
    const base = ctx.currentTime + 0.08;
    bass.forEach((note, index) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      osc.type = "sine";
      osc.frequency.setValueAtTime(note, base + index * 1.3);
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(420, base + index * 1.3);
      gain.gain.setValueAtTime(0.0001, base + index * 1.3);
      gain.gain.exponentialRampToValueAtTime(0.055, base + index * 1.3 + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.0001, base + index * 1.3 + 1.15);
      osc.connect(filter).connect(gain).connect(audio.master);
      osc.start(base + index * 1.3);
      osc.stop(base + index * 1.3 + 1.25);
      audio.nodes.push(osc, filter, gain);
    });
    guitar.forEach((note, index) => {
      const octave = index % 4 === 0 ? 0.5 : 1;
      playPluck(ctx, note * octave, base + index * 0.34, 1.5, index % 2 ? 0.052 : 0.068);
    });
    flute.slice(0, 6 + (round % 2)).forEach((note, index) => {
      playFlute(ctx, note, base + 0.72 + index * 0.52, 1.22, 0.032 + (index % 2) * 0.008);
    });
    round += 1;
  };
  playRound();
  const timer = setInterval(playRound, 5200);
  audio.nodes.push({ stop: () => clearInterval(timer), disconnect() {} });
}
function stopAmbient() {
  audio.nodes.forEach((node) => {
    try { node.stop?.(); } catch {}
    try { node.disconnect?.(); } catch {}
  });
  audio.nodes = [];
  if (audio.element) {
    audio.element.pause();
    audio.element.currentTime = 0;
  }
  if (audio.master && audio.ctx) audio.master.gain.setTargetAtTime(0, audio.ctx.currentTime, 0.06);
  audio.playing = false;
  $("#musicToggle").classList.remove("playing");
}

function startAmbient(kind) {
  if (!audio.ctx) audio.ctx = new (window.AudioContext || window.webkitAudioContext)();
  stopAmbient();
  const ctx = audio.ctx;
  audio.master = ctx.createGain();
  audio.master.gain.value = 0.0001;
  audio.master.connect(ctx.destination);

  if (kind === "water") {
    const noise = createNoise(ctx, 3);
    const filter = ctx.createBiquadFilter();
    filter.type = "bandpass";
    filter.frequency.value = 820;
    filter.Q.value = 0.7;
    const gain = ctx.createGain();
    gain.gain.value = 0.16;
    noise.connect(filter).connect(gain).connect(audio.master);
    noise.start();
    audio.nodes.push(noise, filter, gain);
  } else if (kind === "country") {
    startCountryMusic(ctx);
  } else if (kind === "cicada") {
    for (let i = 0; i < 3; i += 1) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.value = 3600 + i * 520;
      gain.gain.value = 0.018;
      osc.connect(gain).connect(audio.master);
      osc.start();
      const pulse = setInterval(() => {
        const t = ctx.currentTime;
        gain.gain.cancelScheduledValues(t);
        gain.gain.setValueAtTime(0.001, t);
        gain.gain.linearRampToValueAtTime(0.026, t + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.42 + Math.random() * 0.2);
      }, 620 + i * 170);
      audio.nodes.push(osc, gain, { stop: () => clearInterval(pulse), disconnect() {} });
    }
  } else {
    const noise = createNoise(ctx, 4);
    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.value = 1400;
    const gain = ctx.createGain();
    gain.gain.value = 0.09;
    noise.connect(filter).connect(gain).connect(audio.master);
    noise.start();
    audio.nodes.push(noise, filter, gain);
  }

  audio.master.gain.setTargetAtTime(0.22, ctx.currentTime, 0.12);
  audio.playing = true;
  $("#musicToggle").classList.add("playing");
}

function bindEvents() {
  $("#draw").addEventListener("click", () => drawQuestion($("#num").value));
  $("#random").addEventListener("click", () => drawQuestion(Math.floor(Math.random() * 100) + 1));
  $("#num").addEventListener("keydown", (event) => { if (event.key === "Enter") drawQuestion($("#num").value); });
  $("#deepDraw").addEventListener("click", drawDeep);
  $("#type").addEventListener("change", renderBooks);
  $("#refreshBtn").addEventListener("click", loadAnswers);
  $("#quoteDraw")?.addEventListener("click", renderHealingQuote);
  $("#topBtn").addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));
  $("#clear").addEventListener("click", () => alert("共享版不能一键清空公共评论，避免误删大家的内容。"));
  $("#themeToggle").addEventListener("click", () => setTheme(document.body.dataset.theme === "dark" ? "light" : "dark"));
  $("#musicToggle").addEventListener("click", async () => {
    if (audio.ctx?.state === "suspended") await audio.ctx.resume();
    if (audio.playing) stopAmbient(); else startAmbient($("#soundSelect").value);
  });
  $("#soundSelect").addEventListener("change", () => { if (audio.playing) startAmbient($("#soundSelect").value); });
  $$(".answer").forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const kind = form.dataset.kind;
      const textarea = kind === "deep" ? $("#dAnswer") : $("#qAnswer");
      const button = form.querySelector("button");
      const content = textarea.value.trim();
      if (!content) return;
      button.disabled = true;
      button.textContent = "发布中";
      try {
        await addAnswer(kind, content);
        textarea.value = "";
        button.textContent = "已发布";
      } catch (error) {
        alert(error.message);
        button.textContent = "发布失败";
      }
      setTimeout(() => {
        button.disabled = false;
        button.textContent = kind === "deep" ? "发布今日思考" : "发布匿名回答";
      }, 900);
    });
  });
  $$(".tab").forEach((button) => {
    button.addEventListener("click", () => {
      feed = button.dataset.feed;
      $$(".tab").forEach((tab) => tab.classList.toggle("active", tab === button));
      renderFeed();
      renderMotionWall();
    });
  });
}

function boot() {
  bindEvents();
  Object.keys(bookData).forEach((type) => $("#type").insertAdjacentHTML("beforeend", `<option>${type}</option>`));
  setTheme(localStorage.forest_theme || "light");
  const savedDeep = localStorage[`forest_deep_${todayKey()}`];
  if (savedDeep) {
    currentDeep = JSON.parse(savedDeep);
    $("#deepAngle").textContent = currentDeep.angle;
    $("#deepTitle").textContent = currentDeep.title;
    $("#deepPrompt").textContent = currentDeep.prompt;
    $("#daily").textContent = `${todayKey()} 已抽取`;
    $("#deepDraw").disabled = true;
  }
  drawQuestion(1);
  renderBooks();
  renderHealingQuote();
  loadAnswers().catch((error) => { $("#feed").innerHTML = `<div class="empty">加载失败：${escapeHtml(error.message)}</div>`; });
}

boot();



















