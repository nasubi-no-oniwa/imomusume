// =============================================
//  ことば（日本語・English・繁體中文・한국어）
//  ===========================================

(function () {
  var LANGS = ['ja', 'en', 'zh', 'ko'];
  var KEY = 'imomusume-lang';
  var D = {
 "lang_label": [
  "ことば",
  "Language",
  "語言",
  "언어"
 ],
 "home": [
  "なすびのお庭へ",
  "Nasubi's Garden (more games)",
  "前往茄子的庭院",
  "가지의 정원으로"
 ],
 "howto": [
  "あそびかた",
  "How to play",
  "玩法",
  "플레이 방법"
 ],
 "close": [
  "とじる",
  "Close",
  "關閉",
  "닫기"
 ],
 "back": [
  "もどる",
  "Back",
  "返回",
  "돌아가기"
 ],
 "to_title": [
  "タイトルへ",
  "Back to title",
  "回到標題",
  "타이틀로"
 ],
 "again": [
  "もう一回",
  "Play again",
  "再來一局",
  "한 판 더"
 ],
 "easy": [
  "よわい",
  "Easy",
  "簡單",
  "약함"
 ],
 "normal": [
  "ふつう",
  "Normal",
  "普通",
  "보통"
 ],
 "hard": [
  "つよい",
  "Hard",
  "困難",
  "강함"
 ],
 "vs_cpu": [
  "CPUとたいせん",
  "VS CPU",
  "對戰CPU",
  "CPU와 대전"
 ],
 "online": [
  "あいことばで対戦",
  "Play with a passcode",
  "用暗號對戰",
  "암호로 대전"
 ],
 "passcode": [
  "あいことば",
  "Passcode",
  "暗號",
  "암호"
 ],
 "name": [
  "なまえ",
  "Name",
  "名字",
  "이름"
 ],
 "noname": [
  "ななし",
  "Anonymous",
  "無名氏",
  "익명"
 ],
 "online_hint": [
  "同じあいことばを入れた人と対戦。3人目からは観戦になります。",
  "Play against whoever enters the same passcode. From the 3rd person on, you watch.",
  "和輸入相同暗號的人對戰。第3個人開始為觀戰。",
  "같은 암호를 입력한 사람과 대전. 3번째 사람부터는 관전이 됩니다."
 ],
 "join": [
  "はいる",
  "Join",
  "進入",
  "입장"
 ],
 "wait_pre": [
  "あいことば「",
  "Passcode: ",
  "暗號「",
  "암호 「"
 ],
 "wait_post": [
  "」",
  "",
  "」",
  "」"
 ],
 "waiting": [
  "あいてを待っています…",
  "Waiting for an opponent…",
  "等待對手中…",
  "상대를 기다리는 중…"
 ],
 "copy_link": [
  "さそうリンクをコピー",
  "Copy invite link",
  "複製邀請連結",
  "초대 링크 복사"
 ],
 "copied": [
  "コピーしました！",
  "Copied!",
  "已複製！",
  "복사했어요!"
 ],
 "send_link": [
  "このリンクを送ってください",
  "Send this link",
  "請傳送這個連結",
  "이 링크를 보내 주세요"
 ],
 "err_code": [
  "あいことばを入れてください（. # $ / [ ] は使えません）",
  "Enter a passcode (. # $ / [ ] are not allowed)",
  "請輸入暗號（不能使用 . # $ / [ ]）",
  "암호를 입력해 주세요 (. # $ / [ ] 는 사용할 수 없어요)"
 ],
 "err_code_short": [
  "あいことばを入れてください",
  "Enter a passcode",
  "請輸入暗號",
  "암호를 입력해 주세요"
 ],
 "connecting": [
  "つないでいます…",
  "Connecting…",
  "連線中…",
  "연결 중…"
 ],
 "err_net": [
  "通信できませんでした。電波のよいところでもう一度ためしてください",
  "Couldn't connect. Please try again where the signal is better.",
  "無法連線。請在訊號好的地方再試一次。",
  "연결하지 못했어요. 신호가 좋은 곳에서 다시 시도해 주세요."
 ],
 "err_notready": [
  "オンライン対戦はまだ準備中です",
  "Online play isn't ready yet",
  "線上對戰還在準備中",
  "온라인 대전은 아직 준비 중이에요"
 ],
 "err_conn": [
  "つながりませんでした",
  "Couldn't connect",
  "無法連線",
  "연결되지 않았어요"
 ],
 "left_win": [
  "相手が抜けたので、あなたの勝ち！",
  "Your opponent left, so you win!",
  "對手離開了，你贏了！",
  "상대가 나가서 당신의 승리!"
 ],
 "left": [
  "あいてが退室しました",
  "Your opponent left",
  "對手已離開",
  "상대가 퇴장했어요"
 ],
 "watch_in": [
  "観戦で入りました。試合が始まるのを待っています…",
  "You joined as a spectator. Waiting for the game to start…",
  "已用觀戰身分進入。等待比賽開始…",
  "관전으로 입장했어요. 경기 시작을 기다리는 중…"
 ],
 "wait_next": [
  "次の試合が始まるのを待っています…",
  "Waiting for the next game…",
  "等待下一局開始…",
  "다음 경기를 기다리는 중…"
 ],
 "wait_rematch": [
  "あいての「もう一回」を待っています…",
  "Waiting for your opponent to choose \"Play again\"…",
  "等待對手按「再來一局」…",
  "상대의 '한 판 더'를 기다리는 중…"
 ],
 "you": [
  "あなた",
  "You",
  "你",
  "나"
 ],
 "cpu": [
  "CPU",
  "CPU",
  "CPU",
  "CPU"
 ],
 "your_turn": [
  "あなたの番",
  "Your turn",
  "輪到你",
  "내 차례"
 ],
 "cpu_wait_label": [
  "CPU（ふつう）と遊びながら待つ",
  "Play the CPU (Normal) while waiting",
  "一邊和CPU（普通）玩一邊等",
  "기다리는 동안 CPU(보통)와 플레이"
 ],
 "qm_btn": [
  "だれかと対戦",
  "Play someone online",
  "隨機對戰",
  "아무나와 대전"
 ],
 "qm_stat": [
  "対戦待ち <b>{w}</b>人・対戦中 <b>{p}</b>組",
  "<b>{w}</b> waiting · <b>{p}</b> playing",
  "等待中 <b>{w}</b>人・對戰中 <b>{p}</b>組",
  "대기 <b>{w}</b>명 · 대전 중 <b>{p}</b>쌍"
 ],
 "qm_prime_hot": [
  "🔥 いま対戦タイム！（22時まで）",
  "🔥 Battle time now! (until 22:00 JST)",
  "🔥 現在是對戰時間！（到日本時間22點）",
  "🔥 지금은 대전 타임! (일본 시간 22시까지)"
 ],
 "qm_prime": [
  "🌙 毎晩21時〜22時は対戦タイム",
  "🌙 Battle time every night 21:00–22:00 JST",
  "🌙 每晚日本時間21〜22點是對戰時間",
  "🌙 매일 밤 일본 시간 21~22시는 대전 타임"
 ],
 "qm_sub": [
  "いま待っている人と、自動でつながります。",
  "You'll be matched automatically with someone who's waiting.",
  "自動和正在等待的人配對。",
  "기다리고 있는 사람과 자동으로 연결돼요."
 ],
 "qm_go": [
  "さがす",
  "Find a match",
  "尋找",
  "찾기"
 ],
 "qm_badname": [
  "その名前は使えません。ほかの名前にしてね",
  "That name can't be used. Please choose another.",
  "這個名字不能使用，請換一個。",
  "그 이름은 사용할 수 없어요. 다른 이름으로 해 주세요."
 ],
 "qm_searching": [
  "相手をさがしています",
  "Looking for an opponent",
  "正在尋找對手",
  "상대를 찾는 중"
 ],
 "qm_wait_pre": [
  "いま対戦待ち ",
  "Waiting now: ",
  "目前等待中 ",
  "현재 대기 "
 ],
 "qm_wait_post": [
  "人",
  "",
  "人",
  "명"
 ],
 "qm_cpu": [
  "CPUと遊びながら待つ",
  "Play the CPU while waiting",
  "一邊和CPU玩一邊等",
  "기다리는 동안 CPU와 플레이"
 ],
 "qm_cancel": [
  "やめる",
  "Cancel",
  "取消",
  "그만두기"
 ],
 "qm_retry": [
  "もう一度さがす",
  "Search again",
  "再找一次",
  "다시 찾기"
 ],
 "qm_searching_t": [
  "相手をさがしています… {t}",
  "Looking for an opponent… {t}",
  "正在尋找對手… {t}",
  "상대를 찾는 중… {t}"
 ],
 "qm_calling": [
  "CPUと遊んでいる人に声をかけています…",
  "Inviting someone who is playing the CPU…",
  "正在邀請正在和CPU玩的人…",
  "CPU와 플레이 중인 사람에게 신청하는 중…"
 ],
 "qm_declined": [
  "相手が見送りました。ほかの人をさがします",
  "They passed. Looking for someone else.",
  "對方跳過了，改找其他人。",
  "상대가 넘겼어요. 다른 사람을 찾을게요."
 ],
 "qm_found": [
  "相手が見つかりました！",
  "Opponent found!",
  "找到對手了！",
  "상대를 찾았어요!"
 ],
 "qm_avail": [
  "対戦できる相手がいます！",
  "Someone is ready to play!",
  "有可以對戰的對手！",
  "대전할 수 있는 상대가 있어요!"
 ],
 "qm_play": [
  "対戦する",
  "Play",
  "對戰",
  "대전하기"
 ],
 "qm_pass": [
  "見送る",
  "Pass",
  "跳過",
  "넘기기"
 ],
 "qm_taken": [
  "さっきの相手は、ほかの人と対戦を始めました。もう少し待ってね",
  "That player started a match with someone else. Please wait a little longer.",
  "剛才的對手已經和別人開始對戰了。請再等一下。",
  "방금 상대는 다른 사람과 대전을 시작했어요. 조금만 더 기다려 주세요."
 ],
 "qm_fail": [
  "相手とつながりませんでした（{c}）",
  "Couldn't connect to your opponent ({c})",
  "無法和對手連線（{c}）",
  "상대와 연결되지 않았어요 ({c})"
 ],
 "qm_nojoin": [
  "入れませんでした",
  "Couldn't join",
  "無法進入",
  "들어가지 못했어요"
 ],
 "qm_next": [
  "次の相手をさがす",
  "Find next opponent",
  "尋找下一位對手",
  "다음 상대 찾기"
 ],
 "doc_title": [
  "芋娘",
  "Sweet Potato Girl",
  "地瓜娘",
  "고구마 소녀"
 ],
 "doc_desc": [
  "教官の目を盗んで芋を食べろ！何秒耐えられるか挑戦するブラウザゲーム",
  "Sneak sweet potatoes behind the drill instructor's back! A browser game of how long you can last.",
  "趁教官不注意偷吃地瓜！挑戰你能撐多久的網頁遊戲",
  "교관의 눈을 피해 고구마를 먹어라! 얼마나 버틸 수 있는지 도전하는 브라우저 게임"
 ],
 "logo": [
  "芋娘",
  "Sweet Potato Girl",
  "地瓜娘",
  "고구마 소녀"
 ],
 "sub": [
  "教官の目を盗んで、60秒で芋を食べまくれ！",
  "Eat as many sweet potatoes as you can in 60 seconds — without the instructor noticing!",
  "趁教官不注意，60秒內狂吃地瓜！",
  "교관의 눈을 피해 60초 동안 고구마를 마구 먹어라!"
 ],
 "how": [
  "・「食べる」を押している間、芋を食べる（離すと飲み込む）<br>・教官が振り向いたら「敬礼」！（「食べる」を押すまで敬礼したまま）<br>・続けて食べるとコンボで速くなる。コンボ10で芋祭り<br>・口に残ったまま見られたら「飲み込む！」を連打<br>・見つかったら3秒ロス、3回で退場<br>・チラ見・フェイント・2連続・同僚の密告に注意<br>・焼き芋・干し芋・熱々・金の芋も。めざせ芋将軍！",
  "・Hold \"Eat\" to eat (let go to swallow)<br>・When the instructor turns, \"Salute\"! (it holds until you press \"Eat\")<br>・Keep eating for a faster combo. Combo 10 = Potato Fest<br>・Seen with a full mouth? Mash \"Swallow!\"<br>・Caught = 3 sec lost. 3 times and you're out<br>・Beware glances, fake-outs, double turns and a tattletale<br>・Roasted, dried, hot and golden potatoes too. Aim for Potato General!",
  "・按住「吃」的時候會吃地瓜（放開就吞下去）<br>・教官轉過頭來就要「敬禮」！（在按下「吃」之前會一直敬禮）<br>・連續吃會累積連擊、越吃越快。連擊10會開始地瓜祭<br>・嘴裡還有東西被看到時，狂按「吞下去！」<br>・被發現會損失3秒，3次就退場<br>・小心偷瞄、假動作、連續轉頭和同伴告密<br>・還有烤地瓜、地瓜乾、燙地瓜、金地瓜。目標是地瓜將軍！",
  "・\"먹기\"를 누르고 있는 동안 고구마를 먹어요 (떼면 삼켜요)<br>・교관이 돌아보면 \"경례\"! (\"먹기\"를 누를 때까지 경례를 유지해요)<br>・계속 먹으면 콤보로 빨라져요. 콤보 10이면 고구마 축제<br>・입에 남은 채로 들키면 \"삼켜!\"를 연타<br>・들키면 3초 손해, 3번이면 퇴장<br>・힐끗 보기・페인트・2연속・동료의 고자질에 주의<br>・군고구마・말린 고구마・뜨거운 고구마・황금 고구마도 있어요. 목표는 고구마 장군!"
 ],
 "start": [
  "はじめる",
  "Start",
  "開始",
  "시작"
 ],
 "loading": [
  "読み込み中…",
  "Loading…",
  "載入中…",
  "불러오는 중…"
 ],
 "ranking": [
  "ランキング",
  "Ranking",
  "排行榜",
  "랭킹"
 ],
 "pc_note": [
  "パソコン：F＝敬礼　J＝食べる<br>3Dモデル・動き：Quaternius（CC0）",
  "PC: F = Salute, J = Eat<br>3D models &amp; animation: Quaternius (CC0)",
  "電腦：F＝敬禮　J＝吃<br>3D模型・動作：Quaternius（CC0）",
  "PC: F = 경례, J = 먹기<br>3D 모델・동작: Quaternius (CC0)"
 ],
 "bgm_on": [
  "BGM：オン",
  "Music: On",
  "BGM：開",
  "BGM: 켜짐"
 ],
 "bgm_off": [
  "BGM：オフ",
  "Music: Off",
  "BGM：關",
  "BGM: 꺼짐"
 ],
 "salute": [
  "敬礼",
  "Salute",
  "敬禮",
  "경례"
 ],
 "eat": [
  "食べる",
  "Eat",
  "吃",
  "먹기"
 ],
 "swallow": [
  "飲み込む！",
  "Swallow!",
  "吞下去！",
  "삼켜!"
 ],
 "stop": [
  "やめる",
  "Stop",
  "停止",
  "그만"
 ],
 "err_load": [
  "読み込めませんでした",
  "Couldn't load",
  "無法載入",
  "불러오지 못했어요"
 ],
 "err_load_net": [
  "通信状態を確かめて、もう一度開いてください。",
  "Check your connection and open the page again.",
  "請確認網路連線，再重新開啟。",
  "통신 상태를 확인하고 다시 열어 주세요."
 ],
 "err_load_re": [
  "ページを開きなおしてください。",
  "Please reload the page.",
  "請重新開啟頁面。",
  "페이지를 다시 열어 주세요."
 ],
 "hud_left": [
  "のこり",
  "Time",
  "剩餘",
  "시간"
 ],
 "hud_sec": [
  "{n}秒",
  "{n}s",
  "{n}秒",
  "{n}초"
 ],
 "hud_miss": [
  "ミス",
  "Miss",
  "失誤",
  "실수"
 ],
 "hud_combo": [
  "コンボ {n}　速さ ×{x}",
  "Combo {n}  Speed ×{x}",
  "連擊 {n}　速度 ×{x}",
  "콤보 {n}  속도 ×{x}"
 ],
 "hud_pot": [
  "いまの芋：{name}（{n}個分）",
  "Now: {name} (×{n})",
  "目前：{name}（算{n}個）",
  "지금: {name} ({n}개분)"
 ],
 "hud_fever": [
  "芋祭り！ 食べ放題！",
  "POTATO FEST! Eat up!",
  "地瓜祭！ 吃到飽！",
  "고구마 축제! 무한 리필!"
 ],
 "hud_count": [
  "芋 ×{n}",
  "Ate ×{n}",
  "地瓜 ×{n}",
  "고구마 ×{n}"
 ],
 "hud_mash": [
  "連打で飲み込め！ {a} / {b}",
  "Mash to swallow! {a} / {b}",
  "連打吞下去！ {a} / {b}",
  "연타로 삼켜! {a} / {b}"
 ],
 "f_plus": [
  "＋{n}個",
  "+{n}",
  "＋{n}個",
  "+{n}개"
 ],
 "f_combo": [
  "　コンボ{n}！",
  "  Combo {n}!",
  "　連擊{n}！",
  "  콤보 {n}!"
 ],
 "f_break": [
  "コンボ切れ…",
  "Combo lost…",
  "連擊中斷…",
  "콤보 끊김…"
 ],
 "f_loss": [
  "3秒ロス！",
  "-3 sec!",
  "損失3秒！",
  "3초 손해!"
 ],
 "f_chance": [
  "いまのうち！",
  "Now!",
  "趁現在！",
  "지금이야!"
 ],
 "f_fever": [
  "芋祭り！",
  "Potato Fest!",
  "地瓜祭！",
  "고구마 축제!"
 ],
 "pot_normal": [
  "芋",
  "Potato",
  "地瓜",
  "고구마"
 ],
 "pot_yaki": [
  "焼き芋",
  "Roasted potato",
  "烤地瓜",
  "군고구마"
 ],
 "pot_hoshi": [
  "干し芋",
  "Dried potato",
  "地瓜乾",
  "말린 고구마"
 ],
 "pot_atsu": [
  "熱々の芋",
  "Hot potato",
  "燙地瓜",
  "뜨거운 고구마"
 ],
 "pot_kin": [
  "金の芋",
  "Golden potato",
  "金地瓜",
  "황금 고구마"
 ],
 "rk0": [
  "二等兵",
  "Recruit",
  "二等兵",
  "이등병"
 ],
 "rk1": [
  "一等兵",
  "Private",
  "一等兵",
  "일병"
 ],
 "rk2": [
  "上等兵",
  "Private 1st Class",
  "上等兵",
  "상병"
 ],
 "rk3": [
  "兵長",
  "Lance Corporal",
  "兵長",
  "병장"
 ],
 "rk4": [
  "伍長",
  "Corporal",
  "下士",
  "하사"
 ],
 "rk5": [
  "軍曹",
  "Sergeant",
  "中士",
  "중사"
 ],
 "rk6": [
  "曹長",
  "Sergeant Major",
  "士官長",
  "상사"
 ],
 "rk7": [
  "少尉",
  "2nd Lieutenant",
  "少尉",
  "소위"
 ],
 "rk8": [
  "大尉",
  "Captain",
  "上尉",
  "대위"
 ],
 "rk9": [
  "少佐",
  "Major",
  "少校",
  "소령"
 ],
 "rk10": [
  "大佐",
  "Colonel",
  "上校",
  "대령"
 ],
 "rk11": [
  "芋将軍",
  "Potato General",
  "地瓜將軍",
  "고구마 장군"
 ],
 "b_ask_mouth": [
  "口に何かあるか？",
  "Something in your mouth?",
  "嘴裡有東西嗎？",
  "입에 뭐 들었나?"
 ],
 "b_gasp": [
  "……！！",
  "……!!",
  "……！！",
  "……!!"
 ],
 "b_c_eat": [
  "貴様ァ！何を食っている！！",
  "YOU! What are you eating?!",
  "你這傢伙！在吃什麼！！",
  "이 녀석! 뭘 먹고 있나!!"
 ],
 "b_c_salute": [
  "敬礼はどうしたァ！！",
  "Where's your SALUTE?!",
  "敬禮呢！！",
  "경례는 어쨌나!!"
 ],
 "b_c_mash": [
  "飲み込めんのかァ！！",
  "Can't you SWALLOW?!",
  "吞不下去嗎！！",
  "못 삼키나!!"
 ],
 "b_c_pinch": [
  "このほっぺは何だァ！！",
  "What's in those cheeks?!",
  "這臉頰是怎麼回事！！",
  "이 볼은 뭐냐!!"
 ],
 "b_c_pushup": [
  "腕立て伏せ10回ィ！！",
  "Ten push-ups! NOW!",
  "伏地挺身10下！！",
  "팔굽혀펴기 10회!!"
 ],
 "b_ouch": [
  "いひゃいれす！",
  "Owwie!",
  "好痛喔！",
  "아파여!"
 ],
 "b_timeup": [
  "そこまで！",
  "Time's up!",
  "到此為止！",
  "그만!"
 ],
 "b_cough": [
  "ゴホン",
  "Ahem",
  "咳咳",
  "흠흠"
 ],
 "b_snitch": [
  "教官！あいつも食べてました！",
  "Sir! She was eating too!",
  "教官！她也在偷吃！",
  "교관님! 쟤도 먹었어요!"
 ],
 "b_munch": [
  "（もぐもぐ）",
  "(munch munch)",
  "（嚼嚼）",
  "(우물우물)"
 ],
 "b_scold": [
  "そこォ！何を食っとる！！",
  "YOU THERE! What are you eating?!",
  "那邊的！在吃什麼！！",
  "거기! 뭘 먹고 있어!!"
 ],
 "b_eek": [
  "ひぃっ！",
  "Eek!",
  "咿！",
  "히익!"
 ],
 "b_were": [
  "…今、何か食べていたか？",
  "…Were you just eating?",
  "…剛才在吃東西嗎？",
  "…방금 뭐 먹고 있었나?"
 ],
 "b_ok": [
  "……よし。",
  "…Very well.",
  "……很好。",
  "……좋아."
 ],
 "b_air": [
  "いえ！空気を吸っておりました！",
  "No, sir! Just breathing, sir!",
  "沒有！我只是在呼吸！",
  "아닙니다! 숨 쉬고 있었습니다!"
 ],
 "b_wake": [
  "ハッ！",
  "Huh?!",
  "嗯？！",
  "헉!"
 ],
 "b_hot": [
  "アチッ！",
  "Hot!",
  "好燙！",
  "앗 뜨거!"
 ],
 "rt_eat": [
  "退場！（つまみ食い）",
  "Out! (caught eating)",
  "退場！（偷吃被抓）",
  "퇴장! (몰래 먹다 걸림)"
 ],
 "rt_salute": [
  "退場！（敬礼わすれ）",
  "Out! (forgot to salute)",
  "退場！（忘了敬禮）",
  "퇴장! (경례를 잊음)"
 ],
 "rt_mash": [
  "退場！（飲み込めず）",
  "Out! (couldn't swallow)",
  "退場！（吞不下去）",
  "퇴장! (못 삼킴)"
 ],
 "rt_time": [
  "そこまで！",
  "Time's up!",
  "時間到！",
  "종료!"
 ],
 "rp_end": [
  "再生おわり",
  "Replay over",
  "重播結束",
  "재생 끝"
 ],
 "unit": [
  "個",
  " potatoes",
  "個",
  "개"
 ],
 "res_rank": [
  "階級：",
  "Rank: ",
  "軍階：",
  "계급: "
 ],
 "res_sep": [
  "　",
  "<br>",
  "　",
  "　"
 ],
 "res_combo": [
  "最大コンボ {m}",
  "Max combo {m}",
  "最大連擊 {m}",
  "최대 콤보 {m}"
 ],
 "new_best": [
  "自己ベスト更新！",
  "New personal best!",
  "刷新個人最佳！",
  "최고 기록 갱신!"
 ],
 "best": [
  "自己ベスト：芋{c}個（{r}・最大コンボ{m}）",
  "Best: {c} potatoes ({r}, max combo {m})",
  "個人最佳：地瓜{c}個（{r}・最大連擊{m}）",
  "최고 기록: 고구마 {c}개 ({r} · 최대 콤보 {m})"
 ],
 "best_none": [
  "自己ベスト：まだなし",
  "Best: none yet",
  "個人最佳：尚無",
  "최고 기록: 아직 없음"
 ],
 "to_ranking": [
  "ランキングへ",
  "To ranking",
  "前往排行榜",
  "랭킹으로"
 ],
 "again1": [
  "もう一度",
  "Play again",
  "再玩一次",
  "다시 하기"
 ],
 "share_x": [
  "Xで共有",
  "Post to X",
  "分享到X",
  "X에 공유"
 ],
 "title_b": [
  "タイトル",
  "Title",
  "標題",
  "타이틀"
 ],
 "share_txt": [
  "芋娘で、60秒に芋を{c}個食べて「{r}」になった！（最大コンボ{m}）\n#芋娘",
  "I ate {c} sweet potatoes in 60 seconds in Sweet Potato Girl and made \"{r}\"! (max combo {m})\n#SweetPotatoGirl",
  "我在《地瓜娘》60秒內吃了{c}個地瓜，成為「{r}」！（最大連擊{m}）\n#地瓜娘",
  "고구마 소녀에서 60초 동안 고구마 {c}개를 먹고 \"{r}\"이(가) 됐다! (최대 콤보 {m})\n#고구마소녀"
 ],
 "ent_title": [
  "ランキング入り！ 名前を残そう",
  "You made the ranking! Leave your name",
  "進入排行榜！留下你的名字吧",
  "랭킹 진입! 이름을 남기자"
 ],
 "ent_name": [
  "ニックネーム（12文字まで）",
  "Nickname (max 12)",
  "暱稱（最多12個字）",
  "닉네임 (12자까지)"
 ],
 "ent_x": [
  "XのID（なくてもOK・@はいらない）",
  "X handle (optional, no @)",
  "X的ID（可不填・不用加@）",
  "X 아이디 (선택 · @ 없이)"
 ],
 "ent_send": [
  "登録する",
  "Submit",
  "登錄",
  "등록하기"
 ],
 "ent_noname": [
  "ニックネームを入れてください",
  "Please enter a nickname",
  "請輸入暱稱",
  "닉네임을 입력해 주세요"
 ],
 "ent_badx": [
  "XのIDは英数字と _ だけです",
  "X handles use only letters, numbers and _",
  "X的ID只能用英數字和 _",
  "X 아이디는 영문, 숫자, _ 만 가능해요"
 ],
 "ent_sending": [
  "登録中…",
  "Submitting…",
  "登錄中…",
  "등록 중…"
 ],
 "ent_done": [
  "登録しました！",
  "Submitted!",
  "登錄完成！",
  "등록했어요!"
 ],
 "ent_place": [
  "（{n}位）",
  " (#{n})",
  "（第{n}名）",
  " ({n}위)"
 ],
 "ent_err": [
  "登録できませんでした。少し時間をおいてもう一度。",
  "Couldn't submit. Please wait a bit and try again.",
  "無法登錄。請稍後再試一次。",
  "등록하지 못했어요. 잠시 후 다시 시도해 주세요."
 ],
 "rk_loading": [
  "読みこみ中…",
  "Loading…",
  "載入中…",
  "불러오는 중…"
 ],
 "rk_top": [
  "ランキング 上位30",
  "Top 30",
  "排行榜 前30名",
  "랭킹 상위 30"
 ],
 "rk_prep": [
  "ランキングは準備中です",
  "The ranking is not ready yet",
  "排行榜準備中",
  "랭킹은 준비 중이에요"
 ],
 "rk_err": [
  "読みこめませんでした",
  "Couldn't load",
  "無法載入",
  "불러오지 못했어요"
 ],
 "rk_note": [
  "▶ でその人のプレイを見られます",
  "Tap ▶ to watch that player's run",
  "按 ▶ 可以觀看那個人的遊玩",
  "▶ 를 누르면 그 사람의 플레이를 볼 수 있어요"
 ],
 "rk_empty": [
  "まだ記録がありません",
  "No records yet",
  "還沒有紀錄",
  "아직 기록이 없어요"
 ],
 "rk_pcs": [
  "<b>{n}</b>個",
  "<b>{n}</b>",
  "<b>{n}</b>個",
  "<b>{n}</b>개"
 ],
 "rp_loading": [
  "再生を読みこみ中…",
  "Loading replay…",
  "重播載入中…",
  "리플레이 불러오는 중…"
 ],
 "rp_now": [
  "再生中：{name} さん",
  "Replay: {name}",
  "重播中：{name}",
  "재생 중: {name} 님"
 ],
 "rp_err": [
  "再生できませんでした",
  "Couldn't play the replay",
  "無法重播",
  "재생하지 못했어요"
 ]
};
  function pick() {
    try { var q = new URLSearchParams(location.search).get('lang'); if (q && LANGS.indexOf(q) >= 0) { try { localStorage.setItem(KEY, q); } catch (e) {} return q; } } catch (e) {}
    try { var s = localStorage.getItem(KEY); if (s && LANGS.indexOf(s) >= 0) return s; } catch (e) {}
    var n = (navigator.language || 'ja').toLowerCase();
    if (n.indexOf('ja') === 0) return 'ja'; if (n.indexOf('ko') === 0) return 'ko'; if (n.indexOf('zh') === 0) return 'zh'; return 'en';
  }
  var L = pick();
  function t(k, v) {
    var row = D[k]; var i = LANGS.indexOf(L);
    var s = row ? (row[i] != null ? row[i] : row[0]) : k;
    if (v) for (var x in v) s = s.split('{' + x + '}').join(v[x]);
    return s;
  }
  function apply() {
    var de = document.documentElement;
    de.lang = L === 'zh' ? 'zh-Hant' : L; de.setAttribute('data-lang', L);
    document.querySelectorAll('[data-i]').forEach(function (e) { e.textContent = t(e.dataset.i); });
    document.querySelectorAll('[data-ih]').forEach(function (e) { e.innerHTML = t(e.dataset.ih); });
    document.querySelectorAll('[data-ip]').forEach(function (e) { e.placeholder = t(e.dataset.ip); });
    document.querySelectorAll('[data-ia]').forEach(function (e) { e.setAttribute('aria-label', t(e.dataset.ia)); });
    document.querySelectorAll('.langs button').forEach(function (b) { b.setAttribute('aria-pressed', b.dataset.lang === L ? 'true' : 'false'); });
    document.title = t('doc_title');
    var md = document.querySelector('meta[name="description"]'); if (md) md.setAttribute('content', t('doc_desc'));
    try { document.dispatchEvent(new CustomEvent('langchange', { detail: L })); } catch (e) {}
  }
  function set(l) { if (LANGS.indexOf(l) < 0) return; L = l; try { localStorage.setItem(KEY, l); } catch (e) {} apply(); }
  function bind() {
    document.querySelectorAll('.langs button').forEach(function (b) { b.addEventListener('click', function () { set(b.dataset.lang); }); });
    apply();
  }
  window.I18N = { t: t, set: set, apply: apply, get lang() { return L; } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', bind); else bind();
})();
