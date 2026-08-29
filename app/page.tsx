import type { ReactNode } from "react";

/* ------------------------------ データ ------------------------------ */

type Book = {
  title: string;
  author: string;
  note: string;
  spine: string; // 背表紙の色
};

const newBooks: Book[] = [
  {
    title: "夜明けの図書室",
    author: "橘 あかね",
    note: "静かな町の図書室を舞台にした連作短編。",
    spine: "#3f5b74",
  },
  {
    title: "珈琲と余白",
    author: "森下 涼",
    note: "喫茶店の店主が綴る、暮らしのエッセイ集。",
    spine: "#8a5a3c",
  },
  {
    title: "海を編む人々",
    author: "Ana Ferreira",
    note: "漁村の三世代を描く長編小説。翻訳文学。",
    spine: "#2f6b5e",
  },
  {
    title: "はじめての天文学",
    author: "北村 恒",
    note: "図版とともに学ぶ、やさしい入門書。",
    spine: "#4a3b6b",
  },
  {
    title: "台所の道具帖",
    author: "小島 みどり",
    note: "使い込むほど愛おしい、道具の話。",
    spine: "#9a322b",
  },
  {
    title: "とりのいる暮らし",
    author: "ふじた けい",
    note: "文鳥と過ごす日々を描いたコミックエッセイ。",
    spine: "#b08b4f",
  },
];

type Genre = {
  label: string;
  reading: string;
  description: string;
};

const genres: Genre[] = [
  { label: "文芸・小説", reading: "BUNGEI", description: "国内文学から翻訳まで" },
  { label: "人文・思想", reading: "JINBUN", description: "哲学・歴史・社会" },
  { label: "暮らし・料理", reading: "KURASHI", description: "食・住まい・手仕事" },
  { label: "児童書・絵本", reading: "JIDO", description: "読み聞かせから読み物へ" },
  { label: "芸術・デザイン", reading: "ART", description: "写真集・作品集・展覧会図録" },
  { label: "自然科学", reading: "SCIENCE", description: "数学・物理・生きもの" },
];

type NewsItem = {
  date: string;
  tag: string;
  title: string;
};

const news: NewsItem[] = [
  { date: "2026.08.20", tag: "フェア", title: "「夏の終わりに読む一冊」フェア開催中" },
  { date: "2026.08.12", tag: "イベント", title: "8/30(土) 橘あかねさん サイン会のお知らせ" },
  { date: "2026.08.01", tag: "お知らせ", title: "8月の営業日カレンダーを更新しました" },
];

/* ------------------------------ 部品 ------------------------------ */

function SectionHeading({
  en,
  children,
}: {
  en: string;
  children: ReactNode;
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4 border-b border-line pb-4">
      <h2 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
        {children}
      </h2>
      <span className="text-xs tracking-[0.3em] text-muted">{en}</span>
    </div>
  );
}

function BookCard({ book }: { book: Book }) {
  return (
    <article className="group flex gap-4 rounded-lg border border-line bg-paper p-4 transition-shadow hover:shadow-md">
      <div
        className="flex w-14 shrink-0 items-center justify-center rounded-sm shadow-inner"
        style={{ backgroundColor: book.spine }}
        aria-hidden
      >
        <span className="px-1 py-3 text-[10px] font-medium leading-tight tracking-tight text-white/85 [writing-mode:vertical-rl]">
          {book.title}
        </span>
      </div>
      <div className="min-w-0">
        <h3 className="font-serif text-lg font-bold text-ink">{book.title}</h3>
        <p className="mt-0.5 text-xs text-muted">{book.author}</p>
        <p className="mt-2 text-sm leading-6 text-foreground/80">{book.note}</p>
      </div>
    </article>
  );
}

/* ------------------------------ ページ ------------------------------ */

export default function Home() {
  return (
    <main>
      {/* ヒーロー */}
      <section className="border-b border-line">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.2fr_1fr] md:items-center md:py-28">
          <div>
            <p className="text-sm tracking-[0.3em] text-accent">
              ASHIP BOOKS — 街の本屋
            </p>
            <h1 className="mt-5 font-serif text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              本と、
              <br />
              もう少し長く。
            </h1>
            <p className="mt-6 max-w-md text-base leading-8 text-foreground/80">
              あしp書店は、新刊も、長く読み継がれる一冊も、
              分け隔てなく並べる小さな本屋です。
              棚をゆっくり歩く時間を、どうぞ。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#new"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                新刊を見る
              </a>
              <a
                href="#access"
                className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
              >
                お店へのアクセス
              </a>
            </div>
          </div>

          {/* 本棚のモチーフ */}
          <div className="flex items-end justify-center gap-2" aria-hidden>
            {[
              { h: "h-56", c: "#9a322b" },
              { h: "h-72", c: "#3f5b74" },
              { h: "h-64", c: "#2f6b5e" },
              { h: "h-80", c: "#4a3b6b" },
              { h: "h-60", c: "#b08b4f" },
              { h: "h-72", c: "#8a5a3c" },
            ].map((s, i) => (
              <div
                key={i}
                className={`${s.h} w-10 rounded-t-sm shadow-md sm:w-12`}
                style={{ backgroundColor: s.c }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 新刊・話題の本 */}
      <section id="new" className="mx-auto w-full max-w-6xl px-5 py-20">
        <SectionHeading en="NEW &amp; FEATURED">新刊・話題の本</SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {newBooks.map((book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          ※ 在庫状況はお電話でお問い合わせください。取り寄せも承ります。
        </p>
      </section>

      {/* ジャンルから探す */}
      <section id="genres" className="border-y border-line bg-paper">
        <div className="mx-auto w-full max-w-6xl px-5 py-20">
          <SectionHeading en="BROWSE BY GENRE">ジャンルから探す</SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {genres.map((genre) => (
              <div
                key={genre.label}
                className="flex items-center justify-between rounded-lg border border-line bg-background px-5 py-6 transition-colors hover:border-accent"
              >
                <div>
                  <p className="font-serif text-xl font-bold text-ink">
                    {genre.label}
                  </p>
                  <p className="mt-1 text-sm text-muted">{genre.description}</p>
                </div>
                <span className="text-xs tracking-[0.2em] text-gold">
                  {genre.reading}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 今月のフェア */}
      <section id="fair" className="mx-auto w-full max-w-6xl px-5 py-20">
        <SectionHeading en="THIS MONTH">今月のフェア</SectionHeading>
        <div className="grid gap-8 rounded-xl bg-accent px-7 py-10 text-accent-foreground md:grid-cols-[1.3fr_1fr] md:items-center md:px-12 md:py-14">
          <div>
            <p className="text-xs tracking-[0.3em] opacity-80">2026 AUGUST</p>
            <h3 className="mt-3 font-serif text-3xl font-extrabold">
              夏の終わりに読む一冊
            </h3>
            <p className="mt-4 max-w-md text-sm leading-7 opacity-90">
              日が短くなりはじめる頃に開きたくなる本を、
              店主とスタッフがそれぞれ選びました。
              手書きのカードを添えて、店頭中央の平台に並べています。
            </p>
          </div>
          <ul className="space-y-3 border-t border-white/20 pt-6 text-sm md:border-l md:border-t-0 md:pt-0 md:pl-8">
            {news.map((item) => (
              <li key={item.title} className="leading-6">
                <span className="opacity-70">{item.date}</span>
                <span className="mx-2 rounded-full border border-white/30 px-2 py-0.5 text-[11px]">
                  {item.tag}
                </span>
                <br className="sm:hidden" />
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 店舗情報・アクセス */}
      <section id="access" className="border-t border-line bg-paper">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 md:grid-cols-2">
          <div>
            <SectionHeading en="STORE INFO">店舗情報・アクセス</SectionHeading>
            <dl className="divide-y divide-line text-sm">
              <div className="flex gap-6 py-3">
                <dt className="w-20 shrink-0 text-muted">住所</dt>
                <dd className="leading-6">
                  〒000-0000
                  <br />
                  どこかの街 本町1-2-3 あしpビル 1F
                </dd>
              </div>
              <div className="flex gap-6 py-3">
                <dt className="w-20 shrink-0 text-muted">営業時間</dt>
                <dd className="leading-6">
                  10:00 – 21:00
                  <br />
                  年中無休（元日を除く）
                </dd>
              </div>
              <div className="flex gap-6 py-3">
                <dt className="w-20 shrink-0 text-muted">電話</dt>
                <dd className="leading-6">000-000-0000</dd>
              </div>
              <div className="flex gap-6 py-3">
                <dt className="w-20 shrink-0 text-muted">アクセス</dt>
                <dd className="leading-6">
                  本町駅 3番出口より徒歩4分
                  <br />
                  駐輪場あり／専用駐車場はございません
                </dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-col justify-center rounded-xl border border-line bg-background p-8">
            <p className="font-serif text-lg font-bold text-ink">
              取り寄せ・お問い合わせ
            </p>
            <p className="mt-3 text-sm leading-7 text-foreground/80">
              店頭にない本も、通常3〜7日ほどでお取り寄せできます。
              品切れ・重版未定のものはお調べしてご連絡します。
              お電話または店頭のカウンターまでお気軽にどうぞ。
            </p>
            <a
              href="tel:000-000-0000"
              className="mt-6 inline-flex w-fit rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              電話でお問い合わせ
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
