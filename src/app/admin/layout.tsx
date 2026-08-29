import type { Metadata } from "next";

import { logout } from "@/actions/auth";
import { getCurrentUser } from "@/lib/dal";

export const metadata: Metadata = {
  title: "管理",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: LayoutProps<"/admin">) {
  const user = await getCurrentUser();

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-5 py-10">
      <header className="mb-8 flex items-center justify-between border-b border-line pb-4">
        <div>
          <p className="font-serif text-xl font-bold text-ink">管理</p>
          <p className="text-xs text-muted">{user.name}（{user.email}）</p>
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="rounded-full border border-ink/20 px-4 py-2 text-xs font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            ログアウト
          </button>
        </form>
      </header>
      {children}
    </div>
  );
}
