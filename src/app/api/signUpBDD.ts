import { getUserByID,createNewUser } from "./models.ts";

export async function newAccount(credentials: any) {
    const user = await getUserByID(credentials.get("email"));
    if (user?.email === null) {
        await createNewUser(credentials.get("email"), credentials.get("getpassword"), credentials.get("nom"), credentials.get("prenom"));
        return true;
    }
    return null;
}