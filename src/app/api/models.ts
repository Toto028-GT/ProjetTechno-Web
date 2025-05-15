import { ObjectId } from "mongodb";
import { getCollections } from "./db.ts";


export async function getAllElement(){
    try {
        const collection = await getCollections();
        // @ts-ignore
        const user = await collection.findOne({ pseudo: "test" },{ projection: { _id: 0, logements: 1 } });

        const list = user?.logements || [];
        return list;
    } catch (error) {
        console.log(error);
        return []
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

export async function postElement(logement: any){
    try {
        const collection = await getCollections();
        // @ts-ignore
        const result = await collection.insertOne(logement);
        //Renvoyer le tableau JSON à l'utilisateur
        //console.log(list);
        return ({
            message: 'Logement ajouté avec succès',
            logementId: result.insertedId
          });
    } catch (error) {
        console.log(error);
    }
}

export async function deleteElement(id: any){
    try {
        const collection = await getCollections();
        // @ts-ignore
        const result = await collection.deleteOne({"_id": id});
        //Renvoyer le tableau JSON à l'utilisateur
        //console.log(list);
        return ({
            message: 'Logement supprimer avec succès'
          });
    } catch (error) {
        console.log(error);
    }
}

export async function updateElement(id: any,change: any){
    try {
        const collection = await getCollections();
        // @ts-ignore
        const result = await collection?.updateOne({"_id": id},{
            $set: change,
            $currentDate: { lastUpdated: true }
          });
        //Renvoyer le tableau JSON à l'utilisateur
        //console.log(list);
        return ({
            message: 'Logement changer avec succès'
          });
    } catch (error) {
        console.log(error);
    }
}