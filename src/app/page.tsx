import { BookCard } from "@/components/book-card";
import { SectionHeading } from "@/components/section-heading";
import {
  getFeaturedBooks,
  getGenres,
  getNews,
  shopInfo,
} from "@/lib/shop-data";

export default function Home() {
  const featuredBooks = getFeaturedBooks();
  const genres = getGenres();
  const news = getNews();

  return (
    <main>
      {/* ヒーロー */}
      <section className="border-b border-line">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 md:grid-cols-[1.2fr_1fr] md:items-center md:py-28">
          <div>
            <p className="text-sm tracking-[0.3em] text-accent">
              {shopInfo.nameEn} — 近現代史と地政学の専門書店
            </p>
            <h1 className="mt-5 font-serif text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
              教科書の、
              <br />
              その先の棚へ。
            </h1>
            <p className="mt-6 max-w-md text-base leading-8 text-foreground/80">
              あしp書店は、渡辺惣樹・茂木誠・宇山卓栄の著作を軸に、
              日米関係史・第二次世界大戦・地政学・民族史の本を集めた専門書店です。
              関連する翻訳書や当事者の記録もあわせて並べています。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#new"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                話題の本を見る
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
              { h: "h-56", c: "#2f3d5c" },
              { h: "h-72", c: "#6a2f2f" },
              { h: "h-64", c: "#3a3a3a" },
              { h: "h-80", c: "#2f6b5e" },
              { h: "h-60", c: "#b08b4f" },
              { h: "h-72", c: "#9a322b" },
              { h: "h-64", c: "#4a3b6b" },
              { h: "h-80", c: "#3f5b74" },
              { h: "h-56", c: "#7a4a2f" },
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
        <SectionHeading en="FEATURED">話題の本</SectionHeading>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredBooks.map((book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          ※ 在庫状況はお電話でお問い合わせください。品切れ・重版未定の書籍もお調べします。
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
              教科書に書けない近現代史
            </h3>
            <p className="mt-4 max-w-md text-sm leading-7 opacity-90">
              対談本『教科書に書けないグローバリストの近現代史』を入口に、
              渡辺惣樹・茂木誠それぞれの単著、翻訳書、当事者の記録を
              まとめて店頭中央の平台に並べています。
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
                  〒{shopInfo.postalCode}
                  <br />
                  {shopInfo.address}
                </dd>
              </div>
              <div className="flex gap-6 py-3">
                <dt className="w-20 shrink-0 text-muted">営業時間</dt>
                <dd className="leading-6">
                  {shopInfo.hours}
                  <br />
                  {shopInfo.holiday}
                </dd>
              </div>
              <div className="flex gap-6 py-3">
                <dt className="w-20 shrink-0 text-muted">電話</dt>
                <dd className="leading-6">{shopInfo.tel}</dd>
              </div>
              <div className="flex gap-6 py-3">
                <dt className="w-20 shrink-0 text-muted">アクセス</dt>
                <dd className="leading-6">
                  {shopInfo.access}
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
              href={`tel:${shopInfo.tel}`}
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
