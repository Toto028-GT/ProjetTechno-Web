import { Building2, Map } from 'lucide-react';
import { Bouton } from "./components/Bouton";
import Link from 'next/link';


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-purple-50 relative">
      
      <div className="absolute top-6 right-6 flex gap-4 z-50">
        <Link href="/signUp">
          <button className="bg-gradient-to-r from-purple-400 to-purple-600 text-white px-5 py-2 rounded-full shadow-md hover:shadow-lg hover:brightness-110 transition-all font-semibold">
            S'inscrire
          </button>
        </Link>
        <Link href="/login">
          <button className="bg-white text-purple-700 border border-purple-600 px-5 py-2 rounded-full shadow-md hover:bg-purple-50 transition-all font-semibold">
            Se connecter
          </button>
        </Link>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-extrabold text-purple-800 drop-shadow-lg mb-4">
            TROUVEZ VOTRE LOGEMENT IDEAL
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Centralisez vos logements préférés en un seul endroit et facilitez votre recherche.
          </p>
        </div>

        {/* Boutons d’action */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <Bouton
            destination="/allAppartement"
            style="bg-white text-purple-700 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all group"
          >
            <Building2 className="w-16 h-16 mx-auto mb-4 text-purple-500 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-bold mb-2">Liste des Appartements</h2>
            <p className="text-gray-600">Consultez tous les logements que vous avez enregistrés</p>
          </Bouton>

          <Bouton
            destination="/map"
            style="bg-white text-purple-700 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all group"
          >
            <Map className="w-16 h-16 mx-auto mb-4 text-purple-500 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-bold mb-2">Carte Interactive</h2>
            <p className="text-gray-600">Visualisez facilement vos appartements sur une carte</p>
          </Bouton>
        </div>

        {/* Image décorative */}
        <div className="mt-24">
          <img
            src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
            alt="Appartement moderne"
            className="rounded-3xl shadow-2xl mx-auto w-full max-w-5xl"
          />
        </div>
      </div>
    </div>
  );
}
