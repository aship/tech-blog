export default function Loading() {
  return (
    <div className="flex flex-1 items-center justify-center py-32">
      <p
        className="font-serif text-lg text-muted"
        role="status"
        aria-live="polite"
      >
        読み込み中…
      </p>
    </div>
  );
}
