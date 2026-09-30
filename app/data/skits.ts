// 中国語学習コンテンツのデータ定義
// ステージ（スキット）ごとに、単語/フレーズ単位で意味とピンインを持たせています。

export type Word = {
  /** 中国語の単語・フレーズ */
  text: string;
  /** ピンイン */
  pinyin: string;
  /** 日本語の意味 */
  meaning: string;
};

export type Line = {
  /** 話者名 */
  speaker: string;
  /** 単語・フレーズに分割したセリフ */
  words: Word[];
  /** セリフ全体の日本語訳 */
  translation: string;
};

export type GrammarPoint = {
  /** 文法項目 */
  title: string;
  /** 文法の説明 */
  explanation: string;
  /** 例文 */
  example: string;
  /** 例文の日本語訳 */
  exampleTranslation: string;
};

export type Stage = {
  id: string;
  title: string;
  /** ステージの説明 */
  description: string;
  /** このステージで学ぶ文法 */
  grammar: GrammarPoint;
  lines: Line[];
};

export const stages: Stage[] = [
  {
    id: "stage-1",
    title: "第1話：はじめまして",
    description: "初対面のあいさつを学ぶスキットです。",
    grammar: {
      title: "「我叫＋名前」で名前を伝える",
      explanation: "「我叫」のあとに名前を置くと、「私は〜といいます」という意味になります。",
      example: "我叫王芳。",
      exampleTranslation: "私は王芳といいます。",
    },
    lines: [
      {
        speaker: "王さん",
        translation: "こんにちは！",
        words: [{ text: "你好！", pinyin: "Nǐ hǎo!", meaning: "こんにちは" }],
      },
      {
        speaker: "田中さん",
        translation: "こんにちは！お名前は何ですか？",
        words: [
          { text: "你好！", pinyin: "Nǐ hǎo!", meaning: "こんにちは" },
          { text: "你", pinyin: "nǐ", meaning: "あなた" },
          { text: "叫", pinyin: "jiào", meaning: "〜という名前である" },
          { text: "什么", pinyin: "shénme", meaning: "何" },
          { text: "名字", pinyin: "míngzi", meaning: "名前" },
          { text: "？", pinyin: "", meaning: "" },
        ],
      },
      {
        speaker: "王さん",
        translation: "私は王芳といいます。あなたは？",
        words: [
          { text: "我", pinyin: "wǒ", meaning: "私" },
          { text: "叫", pinyin: "jiào", meaning: "〜という名前である" },
          { text: "王芳", pinyin: "Wáng Fāng", meaning: "王芳（人名）" },
          { text: "。", pinyin: "", meaning: "" },
          { text: "你", pinyin: "nǐ", meaning: "あなた" },
          { text: "呢", pinyin: "ne", meaning: "〜は？（省略疑問）" },
          { text: "？", pinyin: "", meaning: "" },
        ],
      },
      {
        speaker: "田中さん",
        translation: "私は田中といいます。よろしくお願いします。",
        words: [
          { text: "我", pinyin: "wǒ", meaning: "私" },
          { text: "叫", pinyin: "jiào", meaning: "〜という名前である" },
          { text: "田中", pinyin: "Tiánzhōng", meaning: "田中（人名）" },
          { text: "。", pinyin: "", meaning: "" },
          { text: "请", pinyin: "qǐng", meaning: "どうぞ" },
          { text: "多", pinyin: "duō", meaning: "多く" },
          { text: "关照", pinyin: "guānzhào", meaning: "面倒を見る、よろしく" },
          { text: "。", pinyin: "", meaning: "" },
        ],
      },
    ],
  },
  {
    id: "stage-2",
    title: "第2話：お礼を言う",
    description: "感謝の気持ちを伝える表現を学ぶスキットです。",
    grammar: {
      title: "「代名詞＋的」で持ち主を表す",
      explanation: "「的」を代名詞の後ろにつけると、「〜の」という意味になります。",
      example: "这是我的。",
      exampleTranslation: "これは私のです。",
    },
    lines: [
      {
        speaker: "田中さん",
        translation: "これはあなたのですか？",
        words: [
          { text: "这", pinyin: "zhè", meaning: "これ" },
          { text: "是", pinyin: "shì", meaning: "〜である" },
          { text: "你的", pinyin: "nǐ de", meaning: "あなたの" },
          { text: "吗", pinyin: "ma", meaning: "〜ですか（疑問）" },
          { text: "？", pinyin: "", meaning: "" },
        ],
      },
      {
        speaker: "王さん",
        translation: "はい、それは私のです。ありがとう！",
        words: [
          { text: "对", pinyin: "duì", meaning: "そうです、正しい" },
          { text: "，", pinyin: "", meaning: "" },
          { text: "那", pinyin: "nà", meaning: "それ" },
          { text: "是", pinyin: "shì", meaning: "〜である" },
          { text: "我的", pinyin: "wǒ de", meaning: "私の" },
          { text: "。", pinyin: "", meaning: "" },
          { text: "谢谢", pinyin: "xièxie", meaning: "ありがとう" },
          { text: "！", pinyin: "", meaning: "" },
        ],
      },
      {
        speaker: "田中さん",
        translation: "どういたしまして。",
        words: [
          { text: "不", pinyin: "bù", meaning: "〜ない" },
          { text: "客气", pinyin: "kèqi", meaning: "遠慮する" },
          { text: "。", pinyin: "", meaning: "" },
        ],
      },
    ],
  },
  {
    id: "stage-3",
    title: "第3話：買い物をする",
    description: "お店での簡単なやり取りを学ぶスキットです。",
    grammar: {
      title: "「我要＋もの」で希望を伝える",
      explanation: "「我」のあとに「要」と欲しいものを続けると、「私は〜が欲しいです」と伝えられます。",
      example: "我要这个。",
      exampleTranslation: "これをください。",
    },
    lines: [
      {
        speaker: "店員",
        translation: "いらっしゃいませ、何が欲しいですか？",
        words: [
          { text: "欢迎光临", pinyin: "huānyíng guānglín", meaning: "いらっしゃいませ" },
          { text: "，", pinyin: "", meaning: "" },
          { text: "你", pinyin: "nǐ", meaning: "あなた" },
          { text: "想", pinyin: "xiǎng", meaning: "〜したい" },
          { text: "要", pinyin: "yào", meaning: "欲しい、必要とする" },
          { text: "什么", pinyin: "shénme", meaning: "何" },
          { text: "？", pinyin: "", meaning: "" },
        ],
      },
      {
        speaker: "田中さん",
        translation: "これはいくらですか？",
        words: [
          { text: "这个", pinyin: "zhège", meaning: "これ" },
          { text: "多少", pinyin: "duōshao", meaning: "どのくらい" },
          { text: "钱", pinyin: "qián", meaning: "お金" },
          { text: "？", pinyin: "", meaning: "" },
        ],
      },
      {
        speaker: "店員",
        translation: "10元です。",
        words: [
          { text: "十", pinyin: "shí", meaning: "10" },
          { text: "块", pinyin: "kuài", meaning: "元（お金の単位）" },
          { text: "钱", pinyin: "qián", meaning: "お金" },
          { text: "。", pinyin: "", meaning: "" },
        ],
      },
      {
        speaker: "田中さん",
        translation: "わかりました、これをください。",
        words: [
          { text: "好的", pinyin: "hǎo de", meaning: "わかりました" },
          { text: "，", pinyin: "", meaning: "" },
          { text: "我要", pinyin: "wǒ yào", meaning: "私は欲しいです" },
          { text: "这个", pinyin: "zhège", meaning: "これ" },
          { text: "。", pinyin: "", meaning: "" },
        ],
      },
    ],
  },
  {
    id: "stage-4",
    title: "第4話：週末の登山計画（中級）",
    description: "天気や条件を伝えながら、週末の予定を相談するスキットです。",
    grammar: {
      title: "「虽然…但是…」で逆接を表す",
      explanation: "「虽然」のあとに条件や事実を述べ、「但是」のあとにそれと対照的な内容を続けます。「〜だけれども、しかし…」という意味です。",
      example: "虽然可能会下雨，但是我还是想去。",
      exampleTranslation: "雨が降るかもしれませんが、それでも私は行きたいです。",
    },
    lines: [
      {
        speaker: "林さん",
        translation: "今週末、山登りに行きませんか？",
        words: [
          { text: "这个周末", pinyin: "zhège zhōumò", meaning: "今週末" },
          { text: "我们", pinyin: "wǒmen", meaning: "私たち" },
          { text: "去", pinyin: "qù", meaning: "行く" },
          { text: "爬山", pinyin: "páshān", meaning: "山登りをする" },
          { text: "吧", pinyin: "ba", meaning: "〜しましょう（提案）" },
          { text: "？", pinyin: "", meaning: "" },
        ],
      },
      {
        speaker: "王さん",
        translation: "いいですね、楽しそうです。でも天気予報では雨が降るそうです。",
        words: [
          { text: "好啊", pinyin: "hǎo a", meaning: "いいですね" },
          { text: "，", pinyin: "", meaning: "" },
          { text: "听起来", pinyin: "tīng qǐlái", meaning: "聞いたところ〜そうだ" },
          { text: "不错", pinyin: "búcuò", meaning: "悪くない、よさそう" },
          { text: "。", pinyin: "", meaning: "" },
          { text: "可是", pinyin: "kěshì", meaning: "しかし、でも" },
          { text: "天气预报", pinyin: "tiānqì yùbào", meaning: "天気予報" },
          { text: "说", pinyin: "shuō", meaning: "言う、〜によると" },
          { text: "会", pinyin: "huì", meaning: "〜するだろう" },
          { text: "下雨", pinyin: "xiàyǔ", meaning: "雨が降る" },
          { text: "。", pinyin: "", meaning: "" },
        ],
      },
      {
        speaker: "林さん",
        translation: "雨が降るかもしれませんが、それでも私は行きたいです。山の景色はきっときれいですよ。",
        words: [
          { text: "虽然", pinyin: "suīrán", meaning: "〜だけれども" },
          { text: "可能", pinyin: "kěnéng", meaning: "〜かもしれない" },
          { text: "会", pinyin: "huì", meaning: "〜するだろう" },
          { text: "下雨", pinyin: "xiàyǔ", meaning: "雨が降る" },
          { text: "，", pinyin: "", meaning: "" },
          { text: "但是", pinyin: "dànshì", meaning: "しかし" },
          { text: "我", pinyin: "wǒ", meaning: "私" },
          { text: "还是", pinyin: "háishi", meaning: "それでも、やはり" },
          { text: "想", pinyin: "xiǎng", meaning: "〜したい" },
          { text: "去", pinyin: "qù", meaning: "行く" },
          { text: "。", pinyin: "", meaning: "" },
          { text: "山上", pinyin: "shānshàng", meaning: "山の上" },
          { text: "的", pinyin: "de", meaning: "〜の（修飾）" },
          { text: "风景", pinyin: "fēngjǐng", meaning: "景色" },
          { text: "一定", pinyin: "yídìng", meaning: "きっと" },
          { text: "很美", pinyin: "hěn měi", meaning: "とても美しい" },
          { text: "。", pinyin: "", meaning: "" },
        ],
      },
      {
        speaker: "王さん",
        translation: "それなら早めに出発しましょう。レインコートを持ってくるのを忘れないでください。",
        words: [
          { text: "那", pinyin: "nà", meaning: "それなら" },
          { text: "我们", pinyin: "wǒmen", meaning: "私たち" },
          { text: "早点", pinyin: "zǎodiǎn", meaning: "早めに" },
          { text: "出发", pinyin: "chūfā", meaning: "出発する" },
          { text: "吧", pinyin: "ba", meaning: "〜しましょう（提案）" },
          { text: "。", pinyin: "", meaning: "" },
          { text: "你", pinyin: "nǐ", meaning: "あなた" },
          { text: "记得", pinyin: "jìde", meaning: "忘れずに〜する" },
          { text: "带", pinyin: "dài", meaning: "持っていく" },
          { text: "雨衣", pinyin: "yǔyī", meaning: "レインコート" },
          { text: "。", pinyin: "", meaning: "" },
        ],
      },
      {
        speaker: "林さん",
        translation: "大丈夫です。もう準備しました。朝7時に地下鉄の駅で会いましょう。",
        words: [
          { text: "没问题", pinyin: "méi wèntí", meaning: "問題ありません" },
          { text: "，", pinyin: "", meaning: "" },
          { text: "我", pinyin: "wǒ", meaning: "私" },
          { text: "已经", pinyin: "yǐjīng", meaning: "すでに" },
          { text: "准备", pinyin: "zhǔnbèi", meaning: "準備する" },
          { text: "好了", pinyin: "hǎo le", meaning: "終わった、できた" },
          { text: "。", pinyin: "", meaning: "" },
          { text: "我们", pinyin: "wǒmen", meaning: "私たち" },
          { text: "早上七点", pinyin: "zǎoshang qī diǎn", meaning: "朝7時" },
          { text: "在", pinyin: "zài", meaning: "〜で" },
          { text: "地铁站", pinyin: "dìtiězhàn", meaning: "地下鉄の駅" },
          { text: "见", pinyin: "jiàn", meaning: "会う" },
          { text: "。", pinyin: "", meaning: "" },
        ],
      },
    ],
  },
  {
    id: "stage-5",
    title: "第5話：ホテルの部屋を片づける（中級）",
    description: "旅行中の会話を通して、物の移動や整理を具体的に伝える表現を学びます。",
    grammar: {
      title: "「把＋目的語＋動詞」で対象への働きかけを表す",
      explanation: "「把」のあとに対象を置き、その後ろに動作や結果・場所を続けます。物をどう扱うかを具体的に伝えるときに使います。",
      example: "我把护照放进背包里了。",
      exampleTranslation: "私はパスポートをリュックに入れました。",
    },
    lines: [
      {
        speaker: "王さん",
        translation: "パスポートは持ってきましたか？",
        words: [
          { text: "你", pinyin: "nǐ", meaning: "あなた" },
          { text: "把", pinyin: "bǎ", meaning: "〜を（対象を前に出す）" },
          { text: "护照", pinyin: "hùzhào", meaning: "パスポート" },
          { text: "带", pinyin: "dài", meaning: "持ってくる" },
          { text: "了吗", pinyin: "le ma", meaning: "〜しましたか（完了の疑問）" },
          { text: "？", pinyin: "", meaning: "" },
        ],
      },
      {
        speaker: "田中さん",
        translation: "持ってきました。もうパスポートをリュックに入れました。",
        words: [
          { text: "带了", pinyin: "dài le", meaning: "持ってきました" },
          { text: "，", pinyin: "", meaning: "" },
          { text: "我", pinyin: "wǒ", meaning: "私" },
          { text: "已经", pinyin: "yǐjīng", meaning: "すでに" },
          { text: "把", pinyin: "bǎ", meaning: "〜を（対象を前に出す）" },
          { text: "护照", pinyin: "hùzhào", meaning: "パスポート" },
          { text: "放进", pinyin: "fàng jìn", meaning: "〜の中に入れる" },
          { text: "背包里", pinyin: "bēibāo lǐ", meaning: "リュックの中" },
          { text: "了", pinyin: "le", meaning: "動作の完了を表す" },
          { text: "。", pinyin: "", meaning: "" },
        ],
      },
      {
        speaker: "王さん",
        translation: "部屋が少し散らかっていますね。まず荷物を片づけましょう。",
        words: [
          { text: "房间", pinyin: "fángjiān", meaning: "部屋" },
          { text: "有点儿", pinyin: "yǒudiǎnr", meaning: "少し、ちょっと" },
          { text: "乱", pinyin: "luàn", meaning: "散らかっている" },
          { text: "，", pinyin: "", meaning: "" },
          { text: "我们", pinyin: "wǒmen", meaning: "私たち" },
          { text: "先", pinyin: "xiān", meaning: "まず" },
          { text: "把", pinyin: "bǎ", meaning: "〜を（対象を前に出す）" },
          { text: "行李", pinyin: "xíngli", meaning: "荷物" },
          { text: "收拾", pinyin: "shōushi", meaning: "片づける" },
          { text: "一下", pinyin: "yíxià", meaning: "ちょっと〜する" },
          { text: "吧", pinyin: "ba", meaning: "〜しましょう（提案）" },
          { text: "。", pinyin: "", meaning: "" },
        ],
      },
      {
        speaker: "田中さん",
        translation: "いいですよ。服はクローゼットに入れて、それから充電器を机の上に置きます。",
        words: [
          { text: "好", pinyin: "hǎo", meaning: "わかりました、いいですよ" },
          { text: "，", pinyin: "", meaning: "" },
          { text: "我", pinyin: "wǒ", meaning: "私" },
          { text: "把", pinyin: "bǎ", meaning: "〜を（対象を前に出す）" },
          { text: "衣服", pinyin: "yīfu", meaning: "服" },
          { text: "放在", pinyin: "fàng zài", meaning: "〜に置く" },
          { text: "柜子里", pinyin: "guìzi lǐ", meaning: "クローゼットの中" },
          { text: "，", pinyin: "", meaning: "" },
          { text: "再", pinyin: "zài", meaning: "それから、次に" },
          { text: "把", pinyin: "bǎ", meaning: "〜を（対象を前に出す）" },
          { text: "充电器", pinyin: "chōngdiànqì", meaning: "充電器" },
          { text: "放在", pinyin: "fàng zài", meaning: "〜に置く" },
          { text: "桌子上", pinyin: "zhuōzi shàng", meaning: "机の上" },
          { text: "。", pinyin: "", meaning: "" },
        ],
      },
      {
        speaker: "王さん",
        translation: "出発する前に、ルームキーをフロントに渡すのを忘れないでください。",
        words: [
          { text: "出发", pinyin: "chūfā", meaning: "出発する" },
          { text: "前", pinyin: "qián", meaning: "〜の前" },
          { text: "别忘了", pinyin: "bié wàng le", meaning: "忘れないで" },
          { text: "把", pinyin: "bǎ", meaning: "〜を（対象を前に出す）" },
          { text: "房卡", pinyin: "fángkǎ", meaning: "ルームキー" },
          { text: "交给", pinyin: "jiāo gěi", meaning: "〜に渡す" },
          { text: "前台", pinyin: "qiántái", meaning: "フロント" },
          { text: "。", pinyin: "", meaning: "" },
        ],
      },
      {
        speaker: "田中さん",
        translation: "わかりました。片づけが終わったら、夕食を食べに行きましょう。",
        words: [
          { text: "知道了", pinyin: "zhīdào le", meaning: "わかりました" },
          { text: "，", pinyin: "", meaning: "" },
          { text: "收拾完", pinyin: "shōushi wán", meaning: "片づけ終わったら" },
          { text: "我们", pinyin: "wǒmen", meaning: "私たち" },
          { text: "就", pinyin: "jiù", meaning: "すぐに、そのあと" },
          { text: "去", pinyin: "qù", meaning: "行く" },
          { text: "吃晚饭", pinyin: "chī wǎnfàn", meaning: "夕食を食べる" },
          { text: "吧", pinyin: "ba", meaning: "〜しましょう（提案）" },
          { text: "。", pinyin: "", meaning: "" },
        ],
      },
    ],
  },
  {
    id: "stage-6",
    title: "第6話：成都旅行の思い出（中級）",
    description: "旅行経験について話しながら、経験を表す文法と関連表現を学びます。",
    grammar: {
      title: "動詞の後ろの「过」で経験を表す",
      explanation: "動詞の後ろに「过」を置くと、過去にその経験があることを表します。否定は「没＋動詞＋过」、質問は文末に「吗」をつけます。",
      example: "你去过成都吗？",
      exampleTranslation: "成都に行ったことがありますか？",
    },
    lines: [
      {
        speaker: "田中さん",
        translation: "成都に行ったことがありますか？",
        words: [
          { text: "你", pinyin: "nǐ", meaning: "あなた" },
          { text: "去", pinyin: "qù", meaning: "行く" },
          { text: "过", pinyin: "guo", meaning: "〜したことがある（経験）" },
          { text: "成都", pinyin: "Chéngdū", meaning: "成都" },
          { text: "吗", pinyin: "ma", meaning: "〜ですか（疑問）" },
          { text: "？", pinyin: "", meaning: "" },
        ],
      },
      {
        speaker: "王さん",
        translation: "一度行ったことがあります。去年、友達と一緒に行きました。",
        words: [
          { text: "去过", pinyin: "qù guo", meaning: "行ったことがある" },
          { text: "一次", pinyin: "yí cì", meaning: "一度" },
          { text: "。", pinyin: "", meaning: "" },
          { text: "去年", pinyin: "qùnián", meaning: "去年" },
          { text: "我", pinyin: "wǒ", meaning: "私" },
          { text: "和", pinyin: "hé", meaning: "〜と" },
          { text: "朋友", pinyin: "péngyou", meaning: "友達" },
          { text: "一起", pinyin: "yìqǐ", meaning: "一緒に" },
          { text: "去", pinyin: "qù", meaning: "行く" },
          { text: "的", pinyin: "de", meaning: "過去の事実を強調する助詞" },
          { text: "。", pinyin: "", meaning: "" },
        ],
      },
      {
        speaker: "田中さん",
        translation: "そこで火鍋を食べたことがありますか？",
        words: [
          { text: "你们", pinyin: "nǐmen", meaning: "あなたたち" },
          { text: "在", pinyin: "zài", meaning: "〜で" },
          { text: "那里", pinyin: "nàli", meaning: "そこ" },
          { text: "吃", pinyin: "chī", meaning: "食べる" },
          { text: "过", pinyin: "guo", meaning: "〜したことがある（経験）" },
          { text: "火锅", pinyin: "huǒguō", meaning: "火鍋" },
          { text: "吗", pinyin: "ma", meaning: "〜ですか（疑問）" },
          { text: "？", pinyin: "", meaning: "" },
        ],
      },
      {
        speaker: "王さん",
        translation: "食べたことがあります。それにパンダ基地にも行きました。成都の火鍋はとてもおいしかったですが、かなり辛かったです。",
        words: [
          { text: "吃过", pinyin: "chī guo", meaning: "食べたことがある" },
          { text: "，", pinyin: "", meaning: "" },
          { text: "而且", pinyin: "érqiě", meaning: "そのうえ、さらに" },
          { text: "还", pinyin: "hái", meaning: "さらに、〜も" },
          { text: "去", pinyin: "qù", meaning: "行く" },
          { text: "了", pinyin: "le", meaning: "動作の完了を表す" },
          { text: "熊猫基地", pinyin: "xióngmāo jīdì", meaning: "パンダ基地" },
          { text: "。", pinyin: "", meaning: "" },
          { text: "成都", pinyin: "Chéngdū", meaning: "成都" },
          { text: "的", pinyin: "de", meaning: "〜の（修飾）" },
          { text: "火锅", pinyin: "huǒguō", meaning: "火鍋" },
          { text: "很", pinyin: "hěn", meaning: "とても" },
          { text: "好吃", pinyin: "hǎochī", meaning: "おいしい" },
          { text: "，", pinyin: "", meaning: "" },
          { text: "不过", pinyin: "búguò", meaning: "でも、しかし" },
          { text: "特别", pinyin: "tèbié", meaning: "特に、かなり" },
          { text: "辣", pinyin: "là", meaning: "辛い" },
          { text: "。", pinyin: "", meaning: "" },
        ],
      },
      {
        speaker: "田中さん",
        translation: "私はまだ成都に行ったことがありませんが、ずっと行ってみたいと思っています。",
        words: [
          { text: "我", pinyin: "wǒ", meaning: "私" },
          { text: "还", pinyin: "hái", meaning: "まだ" },
          { text: "没", pinyin: "méi", meaning: "〜していない" },
          { text: "去", pinyin: "qù", meaning: "行く" },
          { text: "过", pinyin: "guo", meaning: "〜したことがある（経験）" },
          { text: "成都", pinyin: "Chéngdū", meaning: "成都" },
          { text: "，", pinyin: "", meaning: "" },
          { text: "不过", pinyin: "búguò", meaning: "でも、しかし" },
          { text: "一直", pinyin: "yìzhí", meaning: "ずっと" },
          { text: "想", pinyin: "xiǎng", meaning: "〜したいと思う" },
          { text: "去", pinyin: "qù", meaning: "行く" },
          { text: "看看", pinyin: "kànkan", meaning: "見てみる" },
          { text: "。", pinyin: "", meaning: "" },
        ],
      },
      {
        speaker: "王さん",
        translation: "機会があれば、一緒に行きましょう。春に行くのがおすすめです。天気が過ごしやすいですよ。",
        words: [
          { text: "有机会", pinyin: "yǒu jīhuì", meaning: "機会があれば" },
          { text: "的话", pinyin: "dehuà", meaning: "〜なら" },
          { text: "，", pinyin: "", meaning: "" },
          { text: "我们", pinyin: "wǒmen", meaning: "私たち" },
          { text: "可以", pinyin: "kěyǐ", meaning: "〜できる" },
          { text: "一起", pinyin: "yìqǐ", meaning: "一緒に" },
          { text: "去", pinyin: "qù", meaning: "行く" },
          { text: "。", pinyin: "", meaning: "" },
          { text: "我", pinyin: "wǒ", meaning: "私" },
          { text: "建议", pinyin: "jiànyì", meaning: "おすすめする" },
          { text: "春天", pinyin: "chūntiān", meaning: "春" },
          { text: "去", pinyin: "qù", meaning: "行く" },
          { text: "，", pinyin: "", meaning: "" },
          { text: "天气", pinyin: "tiānqì", meaning: "天気" },
          { text: "比较", pinyin: "bǐjiào", meaning: "比較的" },
          { text: "舒服", pinyin: "shūfu", meaning: "快適である" },
          { text: "。", pinyin: "", meaning: "" },
        ],
      },
    ],
  },
];
