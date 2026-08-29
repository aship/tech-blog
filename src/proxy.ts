import { NextResponse, type NextRequest } from "next/server";

import { SESSION_COOKIE, decrypt } from "@/lib/session-crypto";

const PROTECTED_PREFIXES = ["/admin"];

export default async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const isProtected = PROTECTED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
  const isLogin = pathname === "/login";

  if (!isProtected && !isLogin) {
    return NextResponse.next();
  }

  const session = await decrypt(req.cookies.get(SESSION_COOKIE)?.value);

  // 楽観チェック。厳密な検証は /admin レイアウトの verifySession() で行う。
  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }
  if (isLogin && session) {
    return NextResponse.redirect(new URL("/admin", req.nextUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.svg$).*)"],
};
