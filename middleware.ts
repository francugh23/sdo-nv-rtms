import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJwt } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const isApiRoute = request.nextUrl.pathname.startsWith("/api");

  if (isApiRoute) {
    return NextResponse.next();
  }

  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const decoded = verifyJwt(token);

  if (!decoded) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  request.user = decoded;
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|favicon.ico).*)"],
};