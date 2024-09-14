import { NextAuthOptions } from "next-auth"
import { JWT } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"

export interface NextAuthCredentials {
  email: string
  password: string
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "database",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "email",
          type: "email",
          placeholder: "jsmith@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req): Promise<any> {
        const { email, password } = credentials as NextAuthCredentials

        // call api post request for sign inb in authen backend
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  debug: process.env.NODE_ENV === "development",
}
