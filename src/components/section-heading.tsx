import type { ReactNode } from "react";

type SectionHeadingProps = {
  en: string;
  children: ReactNode;
};

export function SectionHeading({ en, children }: SectionHeadingProps) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4 border-b border-line pb-4">
      <h2 className="font-serif text-2xl font-bold text-ink sm:text-3xl">
        {children}
      </h2>
      <span className="text-xs tracking-[0.3em] text-muted">{en}</span>
    </div>
  );
}
