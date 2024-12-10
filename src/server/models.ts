import { getCollections } from "./database/db.js";

export async function getAllElement(){
    try {
        const collection = await getCollections();
        // @ts-ignore
        const list = await collection.find().toArray();
        //Renvoyer le tableau JSON à l'utilisateur
        console.log(list);
        return {list};
    } catch (error) {
        
    }
}