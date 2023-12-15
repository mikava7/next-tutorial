import { NextResponse } from "next/server";

export function middleware(request: Request) {
  const regex = new RegExp("/api/*");
  if (regex.test(request.url)) {
    console.log("Middleware!");
  }

  //   if (request.url.includes("/api/*")) {
  //     console.log("Middleware!");
  //   }

  //   console.log(request.method);
  //  console.log(request.url);

  //   return NextResponse.next();
}

// export const config = {
//   matcher: "/api/:path*",
// };
