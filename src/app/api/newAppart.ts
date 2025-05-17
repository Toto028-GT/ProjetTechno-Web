import { insertAppart,getUserByID } from '@/app/api/models';

export async function newAppart(mail:string | null | undefined,credentials: any) {
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
    credentials.get("lat"), 
    credentials.get("lng"), 
    credentials.get("status"),
    credentials.get("dateVisite"),
    credentials.get("note")
    );
    
    return null;
}