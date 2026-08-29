import { getCurrentUser } from "@/lib/dal";

export default async function AdminPage() {
  const user = await getCurrentUser();

  return (
    <main>
      <h1 className="font-serif text-2xl font-bold text-ink">
        {user.email} でログイン中
      </h1>
      <p className="mt-3 max-w-prose text-sm leading-7 text-foreground/80">
        管理画面の枠組みです。「話題の本」やお知らせを編集する機能は、
        次のステップで追加します。
      </p>
    </main>
  );
}
