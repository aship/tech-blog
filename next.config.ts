import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Prisma 7 のドライバアダプタ（MySQL）とネイティブドライバはバンドルせず
  // サーバー側で require させる。
  serverExternalPackages: [
    "@prisma/client",
    "@prisma/adapter-mariadb",
    "mariadb",
  ],
};

export default nextConfig;
