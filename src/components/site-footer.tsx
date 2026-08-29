import Link from "next/link";
import { navItems, shopInfo } from "@/lib/shop-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-serif text-xl font-bold text-accent">
            {shopInfo.name}
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            {shopInfo.focus}
            <br />
            {shopInfo.since}年creation。
          </p>
        </div>
        <div className="text-sm leading-7 text-muted">
          <p className="font-medium text-foreground">店舗案内</p>
          <p>
            〒{shopInfo.postalCode} {shopInfo.address}
          </p>
          <p>電話 {shopInfo.tel}</p>
          <p>
            営業 {shopInfo.hours}（{shopInfo.holiday}）
          </p>
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
          © {new Date().getFullYear()} {shopInfo.name} {shopInfo.nameEn}
        </p>
      </div>
    </footer>
  );
}
