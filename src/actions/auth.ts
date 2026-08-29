"use server";

import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import * as z from "zod";

import { db } from "@/lib/db";
import { createSession, deleteSession } from "@/lib/session";
import { LoginSchema, type LoginFormState } from "@/lib/validation";

export async function login(
  _prevState: LoginFormState,
  formData: FormData,
): Promise<LoginFormState> {
  const parsed = LoginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsed.success) {
    return { fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }

  const { email, password } = parsed.data;
  const user = await db.user.findUnique({ where: { email } });
  const passwordMatches = user
    ? await bcrypt.compare(password, user.passwordHash)
    : false;

  if (!user || !passwordMatches) {
    return { error: "メールアドレスまたはパスワードが正しくありません。" };
  }

  await createSession(user.id);
  redirect("/admin");
}

export async function logout(): Promise<void> {
  await deleteSession();
  redirect("/login");
}
