import type { Book, Genre, NavItem, NewsItem } from "@/types";

/**
 * 店舗コンテンツのモックデータ。
 * 実データ化する際は、この関数群を Prisma などの取得処理に差し替える
 * （Server Components から直接 await して利用する想定）。
 */

export const navItems: NavItem[] = [
  { href: "/#new", label: "新刊・話題の本" },
  { href: "/#genres", label: "ジャンルから探す" },
  { href: "/#fair", label: "今月のフェア" },
  { href: "/#access", label: "店舗情報" },
];

export const shopInfo = {
  name: "あしp書店",
  nameEn: "ASHIP BOOKS",
  tagline: "本との出会いをお届けする、街の本屋。",
  since: 1998,
  postalCode: "000-0000",
  address: "どこかの街 本町1-2-3 あしpビル 1F",
  tel: "000-000-0000",
  hours: "10:00 – 21:00",
  holiday: "年中無休（元日を除く）",
  access: "本町駅 3番出口より徒歩4分",
} as const;

export function getNewBooks(): Book[] {
  return [
    {
      title: "夜明けの図書室",
      author: "橘 あかね",
      note: "静かな町の図書室を舞台にした連作短編。",
      spine: "#3f5b74",
    },
    {
      title: "珈琲と余白",
      author: "森下 涼",
      note: "喫茶店の店主が綴る、暮らしのエッセイ集。",
      spine: "#8a5a3c",
    },
    {
      title: "海を編む人々",
      author: "Ana Ferreira",
      note: "漁村の三世代を描く長編小説。翻訳文学。",
      spine: "#2f6b5e",
    },
    {
      title: "はじめての天文学",
      author: "北村 恒",
      note: "図版とともに学ぶ、やさしい入門書。",
      spine: "#4a3b6b",
    },
    {
      title: "台所の道具帖",
      author: "小島 みどり",
      note: "使い込むほど愛おしい、道具の話。",
      spine: "#9a322b",
    },
    {
      title: "とりのいる暮らし",
      author: "ふじた けい",
      note: "文鳥と過ごす日々を描いたコミックエッセイ。",
      spine: "#b08b4f",
    },
  ];
}

export function getGenres(): Genre[] {
  return [
    { label: "文芸・小説", reading: "BUNGEI", description: "国内文学から翻訳まで" },
    { label: "人文・思想", reading: "JINBUN", description: "哲学・歴史・社会" },
    { label: "暮らし・料理", reading: "KURASHI", description: "食・住まい・手仕事" },
    {
      label: "児童書・絵本",
      reading: "JIDO",
      description: "読み聞かせから読み物へ",
    },
    {
      label: "芸術・デザイン",
      reading: "ART",
      description: "写真集・作品集・展覧会図録",
    },
    { label: "自然科学", reading: "SCIENCE", description: "数学・物理・生きもの" },
  ];
}

export function getNews(): NewsItem[] {
  return [
    {
      date: "2026.08.20",
      tag: "フェア",
      title: "「夏の終わりに読む一冊」フェア開催中",
    },
    {
      date: "2026.08.12",
      tag: "イベント",
      title: "8/30(土) 橘あかねさん サイン会のお知らせ",
    },
    {
      date: "2026.08.01",
      tag: "お知らせ",
      title: "8月の営業日カレンダーを更新しました",
    },
  ];
}
