import { z } from 'zod';
import { getUserByID,createNewUser } from "./models.ts";

export async function newAccount(credentials: any) {
            const parsedCredentials = z
                .object({ email: z.string().email(), password: z.string().min(5), nom: z.string(), prenom: z.string()})
                .safeParse(credentials);

            if (parsedCredentials.success) {
                const { email, password, nom, prenom } = parsedCredentials.data;
                if (getUserByID(email)===null){ {
                    createNewUser(email,password,nom,prenom);
                }
            }
            return null;
        }
};