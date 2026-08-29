import Link from "next/link";
import { navItems, shopInfo } from "@/lib/shop-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between gap-6 px-5">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-serif text-2xl font-extrabold tracking-wide text-accent">
            {shopInfo.name}
          </span>
          <span className="hidden text-xs tracking-[0.3em] text-muted sm:inline">
            {shopInfo.nameEn}
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
  );
}
