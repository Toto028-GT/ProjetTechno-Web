import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { getUserByID } from '@/app/api/models.ts'
import { CopyMinus } from 'lucide-react';

type User = {
    _id: string;
    pseudo: string;
    email: string;
    avatar: string;
    nom: string;
    prenom: string;
    mdp: string;
}


async function getUser(id: string): Promise<User | null | undefined> {
    try {
        const user = await getUserByID(id);
        return user;
    } catch (error) {
        console.error('Failed to fetch user:', error);
        throw new Error('Failed to fetch user.');
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                const parsedCredentials = z
                    .object({ email: z.string().email(), password: z.string().min(5) })
                    .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password } = parsedCredentials.data;
                    const user = await getUser(email);
                    if (!user) return null;
                    if (password === user.mdp) return user;
                }
                return null;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id; // Store MongoDB _id in JWT
            }
            return token;
        },
        async session({ session, token }) {
            if (token?.id && session.user) {
                (session.user as { id?: string }).id = token.id as string; // Make _id available in session
            }
            return session;
        },
    },
});