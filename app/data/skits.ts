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

export type Stage = {
  id: string;
  title: string;
  /** ステージの説明 */
  description: string;
  lines: Line[];
};

export const stages: Stage[] = [
  {
    id: "stage-1",
    title: "第1話：はじめまして",
    description: "初対面のあいさつを学ぶスキットです。",
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
];
