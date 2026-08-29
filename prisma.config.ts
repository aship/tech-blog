import path from "node:path";
import { defineConfig } from "prisma/config";

// Prisma 7 の CLI は .env を自動読み込みしないため、ここで明示的に読み込む。
try {
  process.loadEnvFile();
} catch {
  // .env が無い環境（CI など）では環境変数から直接供給される想定。
}

export default defineConfig({
  schema: path.join("prisma", "schema.prisma"),
  migrations: {
    path: path.join("prisma", "migrations"),
    seed: "tsx prisma/seed.ts",
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
