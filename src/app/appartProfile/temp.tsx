import {
  ArrowLeft,
  Building2,
  MapPin,
  Ruler,
  Bed,
  Bath,
  Wifi,
  Car,
  BadgeEuro,
  Calendar,
  Info
} from "lucide-react";
import * as React from "react";
import { Bouton } from "../components/Bouton";
import { auth } from "../auth";
import { getAppartByID } from "@/app/api/models";
import Link from "next/link";
import { AppartImage } from "@/app/components/AppartImage";
import EditableDate from "../components/EditableDate";
import Notes from "@/app/components/AddNotes" ;
import { VisiteStatus } from "@/app/components/VisiteStatuts";
import DeleteBouton from  "@/app/components/DeleteBouton";
import { MapWrapper } from "../components/MapWrapper";

export default async function AppartInfo({ id }: { id: string }) {
  const session = await auth();
  const appart = await getAppartByID(id, session?.user?.email);
  if (appart === undefined) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-gray-800">Ce logement n'existe pas.</h1>
      </div>
    );
  } else {
    return (
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden relative">
          {/* Image en haut */}
          <div className="w-full h-64 bg-gray-200">
            <AppartImage src={appart.image} alt={appart.name} />
          </div>

          <div className="p-8">

            {/* Titre + retour */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold flex items-center space-x-2">
                  <Building2 className="w-6 h-6 text-blue-500" />
                  <span>{appart.name}</span>
                </h1>
                <p className="text-gray-600 flex items-center mt-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {appart.adresse}
                </p>
              </div>
            </div>

            {/* Section ajout notes via composant client */}
            <Notes 
                initialNote={appart.note}
                appartId={appart.id} 
            />

            {/* Détails principaux */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 text-gray-700">
              <div className="flex items-center space-x-2">
                <BadgeEuro className="w-5 h-5" />
                <span>{appart.prix} € / mois</span>
              </div>
              <div className="flex items-center space-x-2">
                <Ruler className="w-5 h-5" />
                <span>{appart.superficie} m²</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bed className="w-5 h-5" />
                <span>{appart.chambres} chambre(s)</span>
              </div>
              <div className="flex items-center space-x-2">
                <Bath className="w-5 h-5" />
                <span>{appart.sdb} salle(s) de bain</span>
              </div>
              <div className="flex items-center space-x-2">
                <Car className="w-5 h-5" />
                <span>{appart.parking ? "Parking disponible" : "Pas de parking"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wifi className="w-5 h-5" />
                <span>{appart.internet ? "Internet inclus" : "Pas d'internet"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Info className="w-5 h-5" />
                <span>Type : {appart.type}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Info className="w-5 h-5" />
                <VisiteStatus 
                  initialStatus={appart.status === "non visiter"? "non visiter": appart.status === "visite prévu"? "visite prévu": "visiter"}
                  appartId={appart.id} 
                />
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <EditableDate 
                  initialDate={appart.dateVisite} 
                  appartId={appart.id} 
                />
              </div>
            </div>

            {/* Carte ou coordonnées géo */}
            <h2 className="text-lg font-semibold mb-2">Localisation</h2>
            <div className="mb-6 rounded-lg overflow-hidden border border-gray-200">
              <MapWrapper logements={[appart]} style={{ height: "300px", width: "960px" }} />
            </div>
          </div>

          <DeleteBouton appartId={appart.id}/>
        </div>
    );
  }
}
