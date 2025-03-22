import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "./auth";
import { sql } from '@vercel/postgres';

const protectedRoutes = ["/user"];

export default async function middleware(request: NextRequest) {
  console.log("Middleware executed!");
  const session = await auth();

  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/api/") ||
    pathname === "/login"
  ) {
    return NextResponse.next();
  }

  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (isProtected) {
    if (!session) {
      return NextResponse.redirect(new URL("/login", request.url))
    }
    
    // Obscured database check:
    // Checks if github account is in database and is authorized
  }

  return NextResponse.next();
}