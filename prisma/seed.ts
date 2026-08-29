import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import bcrypt from "bcryptjs";
import { PrismaClient } from "../src/generated/prisma/client";

try {
  process.loadEnvFile();
} catch {
  // .env が無ければ環境変数から供給される想定。
}

const { DATABASE_URL, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is not set (see .env.example)");
}
if (!ADMIN_EMAIL || !ADMIN_PASSWORD) {
  throw new Error("ADMIN_EMAIL / ADMIN_PASSWORD is not set (see .env.example)");
}

const prisma = new PrismaClient({ adapter: new PrismaMariaDb(DATABASE_URL) });

async function main() {
  const passwordHash = await bcrypt.hash(ADMIN_PASSWORD as string, 12);
  const user = await prisma.user.upsert({
    where: { email: ADMIN_EMAIL as string },
    update: { passwordHash },
    create: { email: ADMIN_EMAIL as string, name: "管理者", passwordHash },
  });
  console.log(`Seeded admin user: ${user.email}`);
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
