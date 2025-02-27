import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJwt } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isApiRoute = pathname.startsWith("/api");
  const isLoginRoute = pathname.startsWith("/login");
  const isClientRoute = pathname.startsWith("/client");
  const isTrackingRoute = pathname.startsWith("/track-document");

  if (isApiRoute || isLoginRoute || isClientRoute || isTrackingRoute) {
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
