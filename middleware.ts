import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';

const PUBLIC_PATHS = ['/admin/login'];

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;
    const { pathname } = request.nextUrl;

    // If user is NOT logged in and trying to access a protected route
    if (!token && !PUBLIC_PATHS.includes(pathname)) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
    }

   
    // If user is logged in and tries to access login page
    if (token &&  pathname === '/admin/login') {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
    }

    // // // verify token is valid
    // if (token) {
    //     try {
    //         jwt.verify(token, process.env.JWT_SECRET!);
    //     } catch (err) {
    //         const response = NextResponse.redirect(new URL('/admin/login', request.url));
    //         response.cookies.delete('token'); // remove invalid token
    //         return response;
    //     }
    // }

    return NextResponse.next();
}

// Match only /admin/* routes
export const config = {
  matcher: ['/admin/:path*'],
};