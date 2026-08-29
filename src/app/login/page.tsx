import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { LoginForm } from "@/components/login-form";
import { getSession } from "@/lib/session";

export const metadata: Metadata = {
  title: "管理ログイン",
  robots: { index: false, follow: false },
};

export default async function LoginPage() {
  if (await getSession()) {
    redirect("/admin");
  }

  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-5 py-20">
      <h1 className="font-serif text-2xl font-bold text-ink">管理ログイン</h1>
      <p className="mt-2 mb-6 text-sm text-muted">
        あしp書店スタッフ専用です。
      </p>
      <LoginForm />
    </main>
  );
}
