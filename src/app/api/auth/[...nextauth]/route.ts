import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";

export const authOptions:NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!
  }),
  ],
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };


// import { NextRequest, NextResponse } from "next/server";

// interface User {
//   username: string;
//   password: string;
// }

// const user: User = { username: "user123", password: "12345" };

// export async function POST(request: NextRequest) {
//   const { username, password } = await request.json();

//   if (username === user.username && password === user.password) {
//     const token = "dummy_token";

//     const response = NextResponse.json({ message: "Login successful" });

//     response.cookies.set("token", token, {
//       httpOnly: true,
//       path: "/",
//       maxAge: 86400,
//     });
//     return response;
//   }

//   return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
// }


