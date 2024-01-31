import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { getUser } from './app/lib/auth/authuser';
import bcrypt from 'bcrypt';
import { cookies } from "next/headers";
import { getIronSession } from "iron-session";
import { sessionOptions, SessionData } from "@/app/lib/session/sessionoptions";

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ username: z.string(), password: z.string().min(4) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { username, password } = parsedCredentials.data;
          const user = await getUser(username);

          if (!user) {
            console.log("auth---User ist null!")
            return Promise.resolve(null);
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) {
            const session = await getIronSession<SessionData>(cookies(), sessionOptions);
            session.isLoggedIn = true;
            session.username = user.username;
            //console.log('auth.ts---Session Object:', session);
            await session.save();
            return session;
          }    
        }
        console.log('Invalid credentials');
        return Promise.resolve(null);

      }
    }),
  ],
});