import { getUserByID,createNewUser } from "./models.ts";

export async function newAccount(credentials: any) {
    const user = await getUserByID(credentials.get("email"));
    if (user === null) {
        await createNewUser(credentials.get("email"), credentials.get("password"), credentials.get("nom"), credentials.get("prenom"), credentials.get("avatar"), credentials.get("phone"), credentials.get("adress"));
        return true;
    }
    return null;
}