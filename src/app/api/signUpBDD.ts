import { getUserByID,createNewUser } from "./models.ts";

export async function newAccount(credentials: any) {
    const user = await getUserByID(credentials.email);
    if (user === null) {
        await createNewUser(credentials.email, credentials.password, credentials.nom, credentials.prenom);
        return true;
    }
    return null;
}