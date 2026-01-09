import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: "ADMIN" | "MODEL" | "ENTERPRISE";
    } & DefaultSession["user"];
  }

  interface User {
    id: string;
    role: "ADMIN" | "MODEL" | "ENTERPRISE";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: "ADMIN" | "MODEL" | "ENTERPRISE";
  }
}
