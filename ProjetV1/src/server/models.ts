import { ObjectId } from "mongodb";
import { getCollections } from "./database/db.js";

export interface LogementInput {
    adresse: string;
    prix: number;
    superficie: number;
    chambres: number;
    disponibilite: boolean;
    type: string;
  }

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