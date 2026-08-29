import type { Metadata } from "next";
import { Noto_Sans_JP, Shippori_Mincho } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
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
    default: "あしp書店 | 近現代史と地政学の専門書店",
    template: "%s | あしp書店",
  },
  description:
    "あしp書店は、渡辺惣樹・茂木誠の著作を中心に、日米関係史・第二次世界大戦・地政学の書籍と、関連する翻訳書・一次資料を扱う専門書店です。",
  keywords: [
    "あしp書店",
    "渡辺惣樹",
    "茂木誠",
    "近現代史",
    "地政学",
    "日米関係史",
    "第二次世界大戦",
    "専門書店",
  ],
  openGraph: {
    title: "あしp書店 | 近現代史と地政学の専門書店",
    description:
      "渡辺惣樹・茂木誠の著作を軸に、日米関係史・第二次世界大戦・地政学の本を集めた専門書店。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${shipporiMincho.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <SiteHeader />
        <div className="flex flex-1 flex-col">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
