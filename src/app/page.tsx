'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { Building2, Map } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h1 className="text-5xl font-bold mb-8">Trouvez Votre Appartement Idéal</h1>
        <p className="text-xl mb-12">Simplifiez votre recherche d'appartement avec notre plateforme intuitive</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <button
            onClick={() => router.push('/appart')}
            className="bg-white text-purple-600 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all group"
          >
            <Building2 className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold mb-2">Liste des Appartements</h2>
            <p className="text-gray-600">Consultez tous nos appartements disponibles</p>
          </button>

          <button
            onClick={() => router.push('/map')}
            className="bg-white text-purple-600 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all group"
          >
            <Map className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold mb-2">Carte Interactive</h2>
            <p className="text-gray-600">Visualisez les appartements sur la carte</p>
          </button>
        </div>
      </div>

      <div className="mt-24">
        <img
          src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
          alt="Appartement moderne"
          className="rounded-xl shadow-2xl mx-auto"
        />
      </div>
    </div>
  </div>
  );
}
