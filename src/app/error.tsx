"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center gap-4 px-5 py-32 text-center">
      <h1 className="font-serif text-2xl font-bold text-ink">
        ページを表示できませんでした
      </h1>
      <p className="text-sm text-muted">
        時間をおいて、もう一度お試しください。
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
      >
        再読み込み
      </button>
    </div>
  );
}
