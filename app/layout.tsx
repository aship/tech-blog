import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "あしp書店 | 街の本屋",
    template: "%s | あしp書店",
  },
  description:
    "あしp書店は、新刊から古典、児童書まで幅広く取り揃える街の本屋です。毎月のフェアやイベントで、本との出会いをお届けします。",
  keywords: ["書店", "本屋", "新刊", "ブックフェア", "あしp書店"],
  openGraph: {
    title: "あしp書店 | 街の本屋",
    description: "本との出会いをお届けする、街の本屋。",
    locale: "ja_JP",
    type: "website",
  },
};

const navItems = [
  { href: "/#new", label: "新刊・話題の本" },
  { href: "/#genres", label: "ジャンルから探す" },
  { href: "/#fair", label: "今月のフェア" },
  { href: "/#access", label: "店舗情報" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${shipporiMincho.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur">
          <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-6 px-5">
            <Link href="/" className="group flex items-baseline gap-2">
              <span className="font-serif text-2xl font-extrabold tracking-wide text-accent">
                あしp書店
              </span>
              <span className="hidden text-xs tracking-[0.3em] text-muted sm:inline">
                ASHIP BOOKS
              </span>
            </Link>
            <nav className="hidden items-center gap-7 text-sm text-muted md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/#access"
              className="rounded-full border border-accent px-4 py-2 text-xs font-medium text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              営業時間・地図
            </Link>
          </div>
        </header>

        <div className="flex flex-1 flex-col">{children}</div>

        <footer className="border-t border-line bg-paper">
          <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="font-serif text-xl font-bold text-accent">
                あしp書店
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                本との出会いをお届けする、街の本屋。
                <br />
                1998年creation。
              </p>
            </div>
            <div className="text-sm leading-7 text-muted">
              <p className="font-medium text-foreground">店舗案内</p>
              <p>〒000-0000 どこかの街 本町1-2-3</p>
              <p>電話 000-000-0000</p>
              <p>営業 10:00 – 21:00（年中無休）</p>
            </div>
            <div className="text-sm leading-7 text-muted">
              <p className="font-medium text-foreground">メニュー</p>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="border-t border-line">
            <p className="mx-auto w-full max-w-6xl px-5 py-4 text-xs text-muted">
              © {new Date().getFullYear()} あしp書店 ASHIP BOOKS
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
