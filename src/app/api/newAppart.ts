import { insertAppart, getUserByID } from '@/app/api/models';
import {getCoordinatesFromAddress} from '@/app/api/coord'

export async function newAppart(mail: string, credentials: any) {
  let coords = { lat: null, lng: null };

  try {
    //@ts-ignore
    coords = await getCoordinatesFromAddress(credentials.get("adresse"));
    console.log("Coordonnées :", coords);
  } catch (err: any) {
    console.error("Erreur géocodage :", err.message);
    throw new Error("Impossible de géocoder l'adresse.");
  }

  await insertAppart(
    mail,
    credentials.get("name"),
    credentials.get("adresse"),
    credentials.get("image"),
    credentials.get("prix"),
    credentials.get("superficie"),
    credentials.get("chambres"),
    credentials.get("sdb"),
    credentials.get("parking"),
    credentials.get("internet"),
    credentials.get("type"),
    coords.lat,         // Utilisation ici
    coords.lng,         // Utilisation ici
    credentials.get("status"),
    credentials.get("dateVisite"),
    credentials.get("note")
  );

  return null;
}
