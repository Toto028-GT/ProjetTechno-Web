import { ObjectId } from "mongodb";
import { getCollections } from "./database/db.js";

export async function getAllElement(){
    try {
        const collection = await getCollections();
        // @ts-ignore
        const list = await collection.find().toArray();
        //Renvoyer le tableau JSON à l'utilisateur
        //console.log(list);
        return list;
    } catch (error) {
        console.log(error);
    }
}

export async function getElementById(id: any){
    try {
        const collection = await getCollections();
        // @ts-ignore
        const element = await collection.findOne({"_id": id});
        //Renvoyer le tableau JSON à l'utilisateur
        //console.log(list);
        return element;
    } catch (error) {
        console.log(error);
    }
}