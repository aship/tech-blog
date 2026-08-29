export type Book = {
  title: string;
  author: string;
  note: string;
  /** 背表紙の色（CSS カラー値） */
  spine: string;
  publisher?: string;
  /** 受賞歴など（あればカードにバッジ表示） */
  award?: string;
};

export type Genre = {
  label: string;
  reading: string;
  description: string;
};

export type NewsItem = {
  date: string;
  tag: string;
  title: string;
};

export type NavItem = {
  href: string;
  label: string;
};
