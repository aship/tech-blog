import * as z from "zod";

export const LoginSchema = z.object({
  email: z
    .email({ error: "メールアドレスの形式が正しくありません。" })
    .trim(),
  password: z.string().min(1, { error: "パスワードを入力してください。" }),
});

export type LoginFormState =
  | {
      error?: string;
      fieldErrors?: {
        email?: string[];
        password?: string[];
      };
    }
  | undefined;
