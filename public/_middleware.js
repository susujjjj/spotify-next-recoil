import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

// export async function middleware(req) {
//   const url = req.nextUrl.clone();
//   const token = await getToken({ req, secret: process.env.JWT_SECRET });

//   const { pathname } = req.nextUrl;

//   if (pathname.includes('/api/auth') || token) {
//     return NextResponse.next();
//   }

//   if (!token && pathname !== '/login') {
//     url.pathname = '/login';
//     return NextResponse.redirect(url);
//   }
// }

// export async function middleware(req) {
//   const url = req.nextUrl.clone();
//   url.pathname = '/login';
//   // token will exist if the user is logged in
//   const token = await getToken({ req, secret: process.env.JWT_SECRET });
//   const { pathname } = req.nextUrl;

//   // ALlow the request if the following is true:
//   // 1) it's a request to next-auth session
//   // 2) the token exists

//   if (pathname.includes('/api/auth') || token) {
//     return NextResponse.next();
//   }

//   // redirect to login page if the user is not logged in and they are requesting a protected routeing a protected route
//   if (!token && pathname !== url.pathname) {
//     return NextResponse.rewrite(url);
//   }
// }

// import { getToken } from 'next-auth/jwt';
// import { NextResponse } from 'next/server';

// export async function middleware(req) {
//   const { data: session, status } = useSession(); // 우리에세 액세스 권한을 제공함.

//   const url = req.nextUrl.clone();
//   url.pathname = '/login';

//   console.log(session, 'sessionat middleware????');

//   console.log(url.pathname, 'pathname++++++');

//   console.log(req, 'req+++++');

//   // token will exist if the user is logged in
//   const token = await getToken({ req, secret: process.env.JWT_SECRET });
//   const { pathname } = req.nextUrl;

//   console.log(pathname, 'pathname++++++');

//   // ALlow the request if the following is true:
//   // 1) it's a request to next-auth session
//   // 2) the token exists

//   if (pathname.includes('/api/auth') || token) {
//     return NextResponse.next();
//   }

//   // redirect to login page if the user is not logged in and they are requesting a protected routeing a protected route
//   if (!token && pathname !== url.pathname) {
//     return NextResponse.rewrite(url);
//   }
// }

//원래쓴거
// export async function middleware(req) {
//   //Token will exist if user is logged in
//   const token = await getToken({ req, secret: process.env.JWT_SECRET });

//   console.log(req, 'req');

//   console.log(token, 'token');

//   const { pathname } = req.nextUrl; // we catch it during a request , it says middleware it goes through here. so that request is got somewhere, where it is off to you
//   //so the next url, we're going to get the path name  from it
//   console.log(pathname, 'V');
//   //Allow  the requests if the following is true...
//   // 1) the token exist, then i'mm gonna allow you to go through
//   if (pathname.includes('/api/auth' || token)) {
//     return NextResponse.next();
//   }

//   // Redirect them to login if they don't have token AND are requesting a protected route
//   if (!token && pathname !== '/login') {
//     return NextResponse.redirect('/login');
//   }
// }
// import { getToken } from 'next-auth/jwt';
// import { NextResponse } from 'next/server';

// export async function middleware(req) {
//   const url = req.nextUrl.clone();
//   const token = await getToken({ req, secret: process.env.JWT_SECRET });

//   console.log(url, 'url');

//   const { pathname } = req.nextUrl;

//   if (pathname.includes('/api/auth') || token) {
//     return NextResponse.next();
//   }

//   if (!token && pathname !== '/login') {
//     url.pathname = '/login';
//     return NextResponse.redirect(url);
//   }
// }

export async function middleware(req) {
  const url = req.nextUrl.clone();
  url.pathname = '/login';

  console.log(url, 'url');
  // token will exist if the user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const { pathname } = req.nextUrl;

  // ALlow the request if the following is true:
  // 1) it's a request to next-auth session
  // 2) the token exists

  if (pathname.includes('/api/auth') || token) {
    return NextResponse.next();
  }

  // redirect to login page if the user is not logged in and they are requesting a protected routeing a protected route
  if (!token && pathname !== url.pathname) {
    return NextResponse.rewrite(url);
  }

  if (!token && pathname !== url.pathname) {
    return NextResponse.rewrite('/login');
  }
}
