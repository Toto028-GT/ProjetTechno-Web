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
import { AppartImage } from "@/app/components/appartImage.tsx";
import EditableDate from "../components/EditableDate";

export default async function AppartInfo({ id }: { id: string }) {
  const session = await auth();
  const appart = await getAppartByID(id, session?.user?.email);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center items-start">
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

          {/* Section pour ajouter des notes */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-3">Ajouter des notes</h2>
            <textarea
              className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Exemple : J'aime bien la salle de bain mais il fait un peu sombre..."
            />
            <button
              className="mt-4 mb-8 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
              Enregistrer
            </button>
          </div>

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
                <select
                  className="border border-gray-300 rounded-md px-2 py-1"
                >
                  <option value="Visité">Visité</option>
                  <option value="Non visité">Non visité</option>
                </select>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <EditableDate initialDate={appart.dateVisite} />
            </div>
          </div>

          {/* Carte ou coordonnées géo */}
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Localisation</h2>
            <p className="text-gray-600">
              Coordonnées : [{appart.location[0]}, {appart.location[1]}]
            </p>
            {/* Tu peux insérer une carte ici si tu utilises Leaflet, Mapbox ou autre */}
          </div>
        </div>

        {/* Bouton Supprimer en bas à droite */}
        <div className="absolute bottom-4 right-4">
          <button
            className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-md shadow"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
