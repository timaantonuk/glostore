import NextAuth from "next-auth";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {prisma} from "@/db/prisma";
import CredentialsProvider from 'next-auth/providers/credentials'
import {compareSync} from "bcrypt-ts-edge";
import type {NextAuthConfig} from "next-auth";


export const config = {
    pages: {
        signIn: '/sign-in',
        error: '/sign-in',
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                email: {type: 'email'},
                password: {type: 'password'}
            },
            async authorize(credetials) {
                if (credetials == null) return null;

                //  find user in database
                const user = await prisma.user.findFirst({
                    where: {
                        email: credetials.email as string
                    }
                });

                if (user && user.password) {
                    const isMatch = compareSync(credetials.password as string, user.password)

                    // If password is corrent, return user

                    if (isMatch) {
                        return {
                            id: user.id,
                            name: user.name,
                            email: user.email,
                            role: user.role,
                        }
                    }
                }

                // If user doesn't exist or password not match
                return null

            }
        })
    ],
    callbacks: {
        async session({ session, user, trigger, token }: any) {
            // set user id from token
            session.user.id = token.sub;
            // if there is an update - set user name

            if (trigger === 'update') {
                session.user.name = user.name
            }

            return session
        },
    }
} satisfies NextAuthConfig;

export const {handlers, auth, signIn, signOut} = NextAuth(config);