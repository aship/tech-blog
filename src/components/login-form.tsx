"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";

import { login } from "@/actions/auth";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="mt-2 w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
    >
      {pending ? "確認中…" : "ログイン"}
    </button>
  );
}

export function LoginForm() {
  const [state, formAction] = useActionState(login, undefined);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-4 rounded-xl border border-line bg-paper p-8"
      noValidate
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-sm text-muted">
          メールアドレス
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="username"
          required
          className="rounded-md border border-line bg-background px-3 py-2 text-sm text-ink outline-none focus:border-accent"
        />
        {state?.fieldErrors?.email?.[0] ? (
          <p className="text-xs text-accent">{state.fieldErrors.email[0]}</p>
        ) : null}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="password" className="text-sm text-muted">
          パスワード
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="rounded-md border border-line bg-background px-3 py-2 text-sm text-ink outline-none focus:border-accent"
        />
        {state?.fieldErrors?.password?.[0] ? (
          <p className="text-xs text-accent">{state.fieldErrors.password[0]}</p>
        ) : null}
      </div>

      {state?.error ? (
        <p
          role="alert"
          className="rounded-md bg-accent/10 px-3 py-2 text-sm text-accent"
        >
          {state.error}
        </p>
      ) : null}

      <SubmitButton />
    </form>
  );
}
