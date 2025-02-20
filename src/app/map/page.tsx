'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import dynamic from 'next/dynamic';

// Dynamically import the Map component to avoid SSR issues with Leaflet
const MapComponent = dynamic(() => import('../components/Map') ,{
  ssr: false,
  loading: () => <div className="h-[600px] bg-gray-100 rounded-lg flex items-center justify-center">Chargement de la carte...</div>
});

export default function ApartmentMap() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => router.push('/')}
          className="flex items-center text-purple-600 mb-8 hover:text-purple-700"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour à l'accueil
        </button>

        <h1 className="text-4xl font-bold mb-8 text-gray-900">Carte des Appartements</h1>
        
        <div className="h-[1000px] rounded-lg overflow-hidden shadow-lg">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}