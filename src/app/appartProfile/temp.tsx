import { ArrowLeft, Building2 } from "lucide-react";
import * as React from "react";
import { Bouton } from "../components/Bouton";
import { auth } from "../auth"
import {getAppartByID} from "@/app/api/models"


export default async function AppartInfo({id} : {id:string}) {
  const session = await auth();
  const appart = await getAppartByID(id, session?.user?.email);
  
  return(
    <div>
      <p>{appart.name}</p>
    </div>
  );

}