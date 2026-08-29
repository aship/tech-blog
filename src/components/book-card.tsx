import type { Book } from "@/types";

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="group flex gap-4 rounded-lg border border-line bg-paper p-4 transition-shadow hover:shadow-md">
      <div
        className="flex w-14 shrink-0 items-center justify-center overflow-hidden rounded-sm shadow-inner"
        style={{ backgroundColor: book.spine }}
        aria-hidden
      >
        <span className="max-h-full px-1 py-3 text-[10px] font-medium leading-tight tracking-tight text-white/85 [writing-mode:vertical-rl] line-clamp-6">
          {book.title}
        </span>
      </div>
      <div className="min-w-0">
        <h3 className="font-serif text-lg font-bold text-ink">{book.title}</h3>
        <p className="mt-0.5 text-xs text-muted">
          {book.author}
          {book.publisher ? ` ／ ${book.publisher}` : ""}
        </p>
        {book.award ? (
          <span className="mt-2 inline-block rounded-full bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
            {book.award}
          </span>
        ) : null}
        <p className="mt-2 text-sm leading-6 text-foreground/80">{book.note}</p>
      </div>
    </article>
  );
}
