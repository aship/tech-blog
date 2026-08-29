import type { Book } from "@/types";

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="group flex gap-4 rounded-lg border border-line bg-paper p-4 transition-shadow hover:shadow-md">
      <div
        className="flex w-14 shrink-0 items-center justify-center rounded-sm shadow-inner"
        style={{ backgroundColor: book.spine }}
        aria-hidden
      >
        <span className="px-1 py-3 text-[10px] font-medium leading-tight tracking-tight text-white/85 [writing-mode:vertical-rl]">
          {book.title}
        </span>
      </div>
      <div className="min-w-0">
        <h3 className="font-serif text-lg font-bold text-ink">{book.title}</h3>
        <p className="mt-0.5 text-xs text-muted">{book.author}</p>
        <p className="mt-2 text-sm leading-6 text-foreground/80">{book.note}</p>
      </div>
    </article>
  );
}
