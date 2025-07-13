// import NextAuth from "next-auth";

// import authConfig from "@/auth.config";
// import {
//   DEFAULT_LOGIN_REDIRECT,
//   apiAuthPrefix,
//   authRoutes,
//   publicRoutes,
// } from "@/routes";

// const { auth } = NextAuth(authConfig);

// export default auth((req) => {
//   const { nextUrl } = req;
//   const isLoggedIn = !!req.auth;

//   const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
//   const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
//   const isAuthRoute = authRoutes.includes(nextUrl.pathname);

//   if (isApiAuthRoute) {
//     return null;
//   }

//   if (isAuthRoute) {
//     if (isLoggedIn) {
//       return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
//     }
//     return null;
//   }

//   if (!isLoggedIn && !isPublicRoute) {
//         let callbackUrl = nextUrl.pathname;
//         if (nextUrl.search) {
//           callbackUrl += nextUrl.search;
//         }

//     const encodedCallbackUrl = encodeURIComponent(callbackUrl);

//     return Response.redirect(new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl));
//   }

//     return null;
// });

// // Optionally, don't invoke Middleware on some paths
// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };



import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { v4 as uuidv4 } from "uuid";
import authConfig from "./auth.config";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  apiStorePrefix,
  authRoutes,
  publicRoutes,
} from "./routes";
import { validateCartPrices } from "./routes"; // Import the function
import { db } from "@/lib/db";

interface AuthNextRequest extends NextRequest {
  auth: any;
}

const { auth } = NextAuth(authConfig);

export default auth(async (req: AuthNextRequest) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  // Clone the request headers
  const requestHeaders = new Headers(req.headers);

  // Create response object
  let response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  // Check for existing guest session
  const guestSessionCookie = req.cookies.get("guest_session_id");
  if (!guestSessionCookie) {
    const guestSessionId = uuidv4();
    response = NextResponse.next();
    response.cookies.set({
      name: "guest_session_id",
      value: guestSessionId,
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    // Also set it on the request for immediate use
    requestHeaders.set("x-guest-session-id", guestSessionId);
  }

  // Existing route handling logic
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isApiStoreRoute = apiStorePrefix.some((prefix) =>
    nextUrl.pathname.toLowerCase().startsWith(prefix.toLowerCase())
  );
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiAuthRoute || isApiStoreRoute) {
    return response;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return response;
  }

  if (!isLoggedIn && !isPublicRoute) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }
    const encodedCallbackUrl = encodeURIComponent(callbackUrl);
    return NextResponse.redirect(
      new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl)
    );
  }

  // Validate cart prices for authenticated users on relevant routes
  if (isLoggedIn && !isApiAuthRoute && !isApiStoreRoute && !isAuthRoute) {
    try {
      await validateCartPrices(req.auth.user.id);
    } catch (error) {
      console.error("Error validating cart prices:", error);
      // Continue with the response even if validation fails
    }
  }

  return response;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};