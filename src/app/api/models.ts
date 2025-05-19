import { ObjectId } from "mongodb";
import { getCollections } from "./db.ts";
import { get } from "http";


export async function getAllAppartFromEmail(email : any){
    try {
        const collection = await getCollections();
        // @ts-ignore
        const user = await collection.findOne({ email: email },{ projection: { _id: 0, logements: 1 } });

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
        const element = await collection.findOne({"_id": id });
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

export async function getUserByID(id: any){
    try {
        const collection = await getCollections();
        let element;
        // @ts-ignore
        element = await collection.findOne({"email": id},{projection: { logements: 0 } });
        //Renvoyer le tableau JSON à l'utilisateur
        return element;
    } catch (error) {
        console.log(error);
    }
}

export async function createNewUser(email: any,password: any, nom: any, prenom: any){
    try {
        const collection = await getCollections();
        let element;
        // @ts-ignore
        element = await collection?.insertOne({"email": email, "mdp": password, "nom": nom, "prenom": prenom, "logements": []});
        //Renvoyer le tableau JSON à l'utilisateur
        return element?.insertedId;
    } catch (error) {
        console.log(error);
    }
}

export async function getAppartByID(id : any, user : any) {
    const list = await getAllAppartFromEmail(user);
    return list[id-1];
}

export async function updateVisiteStatus(email: string | null | undefined, appartId: number, newStatus: "visiter" | "non visiter" |"visite prévu") {
  const collection = await getCollections();
  const result = await collection?.updateOne(
    { 
      //@ts-ignore
      email: email,           // filtre utilisateur
      "logements.id": appartId // logement dans le tableau
    },
    {
      $set: { "logements.$.status": newStatus }
    }
  );
  console.log(`Appartement ${appartId} status mis à jour en : ${newStatus}`);
  return result;
}

export async function updateVisiteDate(email: string | null | undefined, appartId: number, newDate: any) {
  const collection = await getCollections();
  const result = await collection?.updateOne(
    { 
      //@ts-ignore
      email: email,           // filtre utilisateur
      "logements.id": appartId // logement dans le tableau
    },
    {
      $set: { "logements.$.dateVisite": newDate }
    }
  );
  console.log(`Appartement ${appartId} date mis à jour en : ${newDate}`);
  return result;
}

export async function updateNote(email: string | null | undefined, appartId: number, newNote : any) {
  const collection = await getCollections();
  const result = await collection?.updateOne(
    { 
      //@ts-ignore
      email: email,           // filtre utilisateur
      "logements.id": appartId // logement dans le tableau
    },
    {
      $set: { "logements.$.note": newNote }
    }
  );
  console.log(`Appartement ${appartId} date mis à jour en : ${newNote}`);
}

export async function deleteAppart(email: string | null | undefined, appartId: number) {
  const collection = await getCollections();

  const result = await collection?.updateOne(
    {
      //@ts-ignore
      email: email,             // filtre utilisateur
    },
    {
      // suppression d’un élément du tableau "logements"
      $pull: {
        logements: { id: appartId }
      }
    }
  );
  console.log(`Appartement ${appartId} supprimé pour l'utilisateur ${email}`);
}

export async function insertAppart(
  email: string,
  name: string,
  adresse: string,
  image: string,
  prix: number,
  superficie: number,
  chambres: number,
  sdb: number,
  parking: boolean,
  internet: boolean,
  type: "Appartement" | "Loft" | "Studio" | "Penthouse",
  lat: number|null, 
  lng: number|null,
  status: string,
  dateVisite: string,
  note: string
) {
  const collection = await getCollections();
  const id = await getAllAppartFromEmail(email).then((list) => list.length + 1);
  const newAppart = {
    id,
    name,
    adresse,
    image,
    prix,
    superficie,
    chambres,
    sdb,
    parking,
    internet,
    type,
    location: {lat, lng},
    status,
    dateVisite,
    note
  };
  const result = await collection?.updateOne(
    { email: email },
    //@ts-ignore
    { $push: { logements: newAppart } }
  );
  return result;
}