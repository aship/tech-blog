import "server-only";

import { cache } from "react";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { getSession } from "@/lib/session";

/**
 * セッションを検証する。未ログインなら /login へリダイレクト。
 * React の cache で 1 レンダー内はメモ化される。
 */
export const verifySession = cache(async () => {
  const session = await getSession();
  if (!session) {
    redirect("/login");
  }
  return session;
});

/**
 * ログイン中の管理者を DTO（id / email / name のみ）で返す。
 */
export const getCurrentUser = cache(async () => {
  const session = await verifySession();
  const user = await db.user.findUnique({
    where: { id: session.userId },
    select: { id: true, email: true, name: true },
  });
  if (!user) {
    redirect("/login");
  }
  return user;
});
