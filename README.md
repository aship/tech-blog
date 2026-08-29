This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 管理者ログイン（ローカル開発）

`/admin` はログインが必要です。MySQL（Docker）と管理者ユーザーのセットアップ:

```bash
cp .env.example .env
# .env を編集: SESSION_SECRET を生成して設定
openssl rand -base64 32

npm install          # 依存 + prisma generate（postinstall）
npm run db:up        # docker compose で MySQL を起動
npm run db:migrate   # マイグレーション適用（prisma/migrations）
npm run db:seed      # .env の ADMIN_EMAIL / ADMIN_PASSWORD で管理者を作成
npm run dev
```

ブラウザで [http://localhost:3000/login](http://localhost:3000/login) から、`.env` の
`ADMIN_EMAIL` / `ADMIN_PASSWORD` でログインします。停止は `npm run db:down`。

- `.env` は git 管理対象外（`.env.example` が雛形）。
- Prisma クライアントは `src/generated/prisma`（git 管理対象外、`postinstall` で再生成）。
- スキーマ変更後は `npm run db:migrate` で新しいマイグレーションを作成する。

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
