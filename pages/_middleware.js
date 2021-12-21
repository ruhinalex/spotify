import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'

export async function middleware(req) {
    // Token will exist if user is logged in
    const token = await getToken({ req, secret: process.env.JWT_SECRET });


    const { pathname } = req.nextUrl;

    // Redirect them to login if they don't have token AND are requesting a protected route
    // if (!token && pathname !== '/login') {
    //     return NextResponse.redirect('/login');
    // }

    // Redirect them to home if they have token AND are requesting to login
    
    if (token && pathname === '/login') {
        console.log(token)
        return NextResponse.redirect('/');
    }

    // Allow the requests if the following is true...
    // 1) the token exists
    // 2) the token exists
    if (pathname.includes('/api/auth') || token) {
        return NextResponse.next();
    }

}