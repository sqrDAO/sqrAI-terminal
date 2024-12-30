import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // Lấy URL hiện tại
  const url = req.nextUrl;
  if (url.pathname === '/') {
    return NextResponse.next();
  }
  // Lấy token từ session
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  // Nếu không có token, redirect về trang chủ "/"
  if (!token) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Nếu có token, cho phép tiếp tục
  return NextResponse.next();
}

export const config = {
  // Áp dụng middleware cho tất cả các route, trừ trang chủ "/"
  matcher: "/((?!api|_next|static|favicon.ico|public|imgs|icons).*)",
};
