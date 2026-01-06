import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const role = request.cookies.get("role")?.value;

  // Public routes
  if (
    pathname === "/" ||
    pathname.startsWith("/login") ||
    pathname.startsWith("/register")
  ) {
    return NextResponse.next();
  }

  // Admin protection
  if (pathname.startsWith("/admin")) {
    if (role !== "ADMIN") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Model protection
  if (pathname.startsWith("/model")) {
    if (role !== "MODEL") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Enterprise protection
  if (pathname.startsWith("/enterprise")) {
    if (role !== "ENTERPRISE") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/model/:path*",
    "/enterprise/:path*",
  ],
};
