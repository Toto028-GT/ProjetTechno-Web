import { z } from 'zod';
import { getUserByID,createNewUser } from "./models.ts";
import Credentials from 'next-auth/providers/credentials';

export async function newAccount(credentials: any) {
    Credentials({
            async authorize(credentials: Partial<Record<string, unknown>>, req: Request) {
               const parsedCredentials = z
                .object({ email: z.string().email(), password: z.string().min(5), nom: z.string(), prenom: z.string()})
                .safeParse(credentials);

                if (parsedCredentials.success) {
                    const { email, password, nom, prenom } = parsedCredentials.data;
                    const user = await getUserByID(email);
                    if (user === null) {
                        await createNewUser(email, password, nom, prenom);
                        return { id: email, email, name: `${prenom} ${nom}` };
                    }
                }
                return null;
            }
        }),
};