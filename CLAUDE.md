# Next.js 16 フルスタック開発ルール

@AGENTS.md

## プロジェクト構成
- Next.js 16 App Router専用（Pages Router/getServerSideProps/getStaticPropsは使用禁止）
- TypeScript strict: true（anyは禁止、unknownかgenericsを使う）
- Tailwind CSS v4（tailwind.config.tsは不要、globals.cssの@themeで設定）
- shadcn/ui v4（CLIでインストール、直接編集禁止）
- Prisma 7（importパスは@/generated/prisma/client、@prisma/clientは不可）
- Zod（バリデーション統一）

## ディレクトリ構造
src/
  app/           # App Router（page.tsx, layout.tsx, loading.tsx, error.tsx必須）
  components/    # UIコンポーネント
  actions/       # Server Actions（"use server"専用ファイル）
  lib/           # DB接続（db.ts）・ユーティリティ
  types/         # 型定義

## コンポーネントルール（重要）
- デフォルトはServer Components
- "use client"はonClick/useState/useEffectなどインタラクションが必要な箇所のみ
- データ取得のためだけにClient Componentにしない
- Server Componentsでasync/awaitを使いDBを直接取得する
- loading.tsxとerror.tsxをすべての非同期ルートに追加する

## データ取得・変更のルール
- データ取得: Server ComponentsでPrisma/Drizzleを直接await
- ミューテーション: Server Actions（"use server" + Zodバリデーション + revalidatePath）
- 内部データアクセスにAPIルートを使わない（webhookや外部公開APIのみRoute Handlers使用）
- useEffectでの初期データ取得は禁止

## キャッシング（Next.js 16の"use cache"）
- 静的コンテンツ: "use cache"ディレクティブ + cacheLife()
- キャッシュ無効化: cacheTag() + revalidateTag()（Server Actions内）
- "use cache"内でcookies()/headers()を直接呼ばない（外で読んで引数として渡す）

## Next.js 16の変更点（必ず従うこと）
- params/searchParams/cookies()/headers()/draftMode()はすべてPromise型→awaitが必要
- middleware.tsはproxy.tsにリネーム推奨（新しいプロジェクト）
- Turbopackがデフォルトバンドラー（webpackは--webpackフラグで切替）
- next lintコマンド廃止（ESLintを直接使う）

## Prisma 7の変更点
- importパス: @/generated/prisma/client（@prisma/clientは廃止）
- @prisma/adapter-pgが必須: npm install @prisma/adapter-pg pg
- P2002エラーのmeta.targetの取得方法が変更（コードコメントで補足）

## 禁止事項
- Pages Router/getServerSideProps/getStaticPropsの使用
- any型の使用
- useEffectでのデータフェッチ
- 内部データアクセスにAPIルートを使う
- shadcn/uiコンポーネントの直接編集
- キャッシュ設定なしの裸のfetch()
