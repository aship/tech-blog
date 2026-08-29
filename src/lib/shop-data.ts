import type { Book, Genre, NavItem, NewsItem } from "@/types";

/**
 * 店舗コンテンツのモックデータ。
 * 実データ化する際は、この関数群を Prisma などの取得処理に差し替える
 * （Server Components から直接 await して利用する想定）。
 */

export const navItems: NavItem[] = [
  { href: "/#new", label: "話題の本" },
  { href: "/#genres", label: "ジャンルから探す" },
  { href: "/#fair", label: "今月のフェア" },
  { href: "/#access", label: "店舗情報" },
];

export const shopInfo = {
  name: "あしp書店",
  nameEn: "ASHIP BOOKS",
  tagline: "近現代史と地政学の棚から。",
  focus:
    "渡辺惣樹・茂木誠・宇山卓栄の著作を軸に、日米関係史・第二次世界大戦・地政学・民族史の本を集めています。",
  since: 1998,
  postalCode: "000-0000",
  address: "どこかの街 本町1-2-3 あしpビル 1F",
  tel: "000-000-0000",
  hours: "10:00 – 21:00",
  holiday: "年中無休（元日を除く）",
  access: "本町駅 3番出口より徒歩4分",
} as const;

export function getFeaturedBooks(): Book[] {
  return [
    {
      title: "日米衝突の萌芽 1898-1918",
      author: "渡辺惣樹",
      publisher: "草思社",
      award: "山本七平賞奨励賞",
      note: "日露戦争後、太平洋をはさんで芽生えた日米対立の起点をたどる。",
      spine: "#2f3d5c",
    },
    {
      title: "第二次世界大戦とは何だったのか",
      author: "渡辺惣樹",
      publisher: "PHP研究所",
      note: "開戦から戦後秩序の形成までを、日米関係史の視点で読み直す一冊。",
      spine: "#6a2f2f",
    },
    {
      title: "裏切られた自由（上・下）",
      author: "H・フーバー／渡辺惣樹 訳",
      publisher: "草思社",
      note: "フーバー元大統領が遺した、第二次世界大戦の“隠された歴史”。",
      spine: "#3a3a3a",
    },
    {
      title: "世界史で学べ！地政学",
      author: "茂木誠",
      publisher: "祥伝社",
      note: "各地で多発する紛争の構造を、地図と歴史から読み解く定番入門。",
      spine: "#2f6b5e",
    },
    {
      title: "経済は世界史から学べ！",
      author: "茂木誠",
      publisher: "ダイヤモンド社",
      note: "通貨・貿易・バブル——いまの経済ニュースを通史でつかむ。",
      spine: "#b08b4f",
    },
    {
      title: "教科書に書けないグローバリストの近現代史",
      author: "渡辺惣樹 × 茂木誠",
      publisher: "ビジネス社",
      note: "二人の対談で、教科書には収まらない近現代史の裏側をたどる。",
      spine: "#9a322b",
    },
    {
      title: "世界「民族」全史 衝突と融合の人類5000年史",
      author: "宇山卓栄",
      publisher: "日本実業出版社",
      note: "人類5000年を「民族」の衝突と融合の視点で通観する大著。",
      spine: "#4a3b6b",
    },
    {
      title: "「宗教」で読み解く世界史",
      author: "宇山卓栄",
      publisher: "日本実業出版社",
      note: "宗教の対立と交わりから、世界史の骨格をつかむ。",
      spine: "#3f5b74",
    },
    {
      title: "民族と文明で読み解く大アジア史",
      author: "宇山卓栄",
      publisher: "講談社現代新書",
      note: "中国・インド・イスラム圏を貫く、アジア史の見取り図。",
      spine: "#7a4a2f",
    },
  ];
}

export function getGenres(): Genre[] {
  return [
    {
      label: "日米関係史",
      reading: "NICHIBEI",
      description: "開国から太平洋戦争までの日米対立（渡辺惣樹）",
    },
    {
      label: "第二次世界大戦・現代史",
      reading: "WWII",
      description: "『裏切られた自由』ほか、検証と一次資料",
    },
    {
      label: "地政学",
      reading: "GEOPOLITICS",
      description: "地図と歴史から国際紛争を読む（茂木誠）",
    },
    {
      label: "世界史・通史",
      reading: "SEKAISHI",
      description: "経済・宗教・民族でつなげる世界史（茂木誠・宇山卓栄）",
    },
    {
      label: "対談・共著",
      reading: "TAIDAN",
      description: "渡辺惣樹×茂木誠ほかの対話",
    },
    {
      label: "翻訳・一次資料",
      reading: "GENSHIRYO",
      description: "フーバー、フィッシュなど当事者の記録",
    },
  ];
}

export function getNews(): NewsItem[] {
  return [
    {
      date: "2026.08.20",
      tag: "フェア",
      title: "「渡辺惣樹×茂木誠 教科書に書けない近現代史」フェア開催中",
    },
    {
      date: "2026.08.12",
      tag: "入荷",
      title: "渡辺惣樹の新刊、予約受付を開始しました",
    },
    {
      date: "2026.08.01",
      tag: "お知らせ",
      title: "8月の営業日カレンダーを更新しました",
    },
  ];
}
