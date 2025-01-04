import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // Lấy URL hiện tại
  const url = req.nextUrl;
  if (url.pathname === '/') {
    return NextResponse.next();
  }

  // Lấy token từ session
  const token = await getToken({ req });

  // Nếu không có token, redirect về trang chủ "/"
  if (!token) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Nếu có token, cho phép tiếp tục
  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return response;
}

export const config = {
  // Áp dụng middleware cho tất cả các route, trừ trang chủ "/"
  matcher: "/((?!api|_next|static|favicon.ico|public|imgs|icons).*)",
};
