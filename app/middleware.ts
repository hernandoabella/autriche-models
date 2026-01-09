import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { ROLES } from "@/app/lib/constants";

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const role = req.nextauth.token?.role;

    // Admin-only routes
    if (
      ["/models", "/payments"].some(p => pathname.startsWith(p)) &&
      role !== ROLES.ADMIN
    ) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // Model-only routes
    if (
      ["/profile", "/portfolio", "/availability"].some(p =>
        pathname.startsWith(p)
      ) &&
      role !== ROLES.MODEL
    ) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // Enterprise-only routes
    if (
      ["/catalog", "/subscriptions"].some(p =>
        pathname.startsWith(p)
      ) &&
      role !== ROLES.ENTERPRISE
    ) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/models/:path*",
    "/payments/:path*",
    "/profile/:path*",
    "/portfolio/:path*",
    "/availability/:path*",
    "/catalog/:path*",
    "/subscriptions/:path*",
  ],
};
