

import { ArrowLeft } from 'lucide-react';
import dynamic from 'next/dynamic';
import { Bouton } from '../components/Bouton';
import { auth } from "../auth";
import { getAllAppartFromEmail } from "@/app/api/models";
import {MapWrapper} from '../components/MapWrapper';


export default async function ApartmentMap() {
  const session = await auth();
  const appart = await getAllAppartFromEmail(session?.user?.email);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
      <Bouton destination="/" style="flex items-center text-purple-600 mb-8 hover:text-purple-700">
        <ArrowLeft className="w-5 h-5 mr-2" />
        Retour à l'accueil
      </Bouton>

        <h1 className="text-4xl font-bold mb-8 text-gray-900">Carte des Appartements</h1>
        
        <div className="h-[1000px] rounded-lg overflow-hidden shadow-lg">
          <MapWrapper logements={appart} style={{ height: "100%" ,width: "100%" }} />
        </div>
      </div>
    </div>
  );
}