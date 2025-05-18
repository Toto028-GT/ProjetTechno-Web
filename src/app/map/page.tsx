import { ArrowLeft } from 'lucide-react';
import { Bouton } from '../components/Bouton';
import { auth } from "../auth";
import { getAllAppartFromEmail } from "@/app/api/models";
import { MapWrapper } from '../components/MapWrapper';

export default async function ApartmentMap() {
  const session = await auth();
  const appart = await getAllAppartFromEmail(session?.user?.email);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white flex flex-col">
      <div className="container mx-auto px-6 py-8 flex flex-col gap-8">
        {/* En-tête */}
        <header className="flex items-center justify-between">
          <Bouton
            destination="/"
            style="flex items-center text-purple-600 hover:text-purple-700 font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Bouton>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center flex-grow mx-8">
            CARTE DES LOGEMENTS
          </h1>

          {/* Placeholder pour équilibrer */}
          <div style={{ width: 140 }} />
        </header>

        {/* Carte */}
        <main className="flex-grow rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <MapWrapper logements={appart} style={{ height: '80vh', width: '100%' }} />
        </main>
      </div>
    </div>
  );
}
