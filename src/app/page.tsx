'use client';

import { Building2, Map } from 'lucide-react';
import { Bouton } from "./components/Bouton";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 to-purple-50 relative overflow-hidden">
      {/* Image d’arrière-plan */}
      <div className="absolute inset-0 opacity-10 z-0">
        <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="Illustration" className="w-full h-full object-cover" />
      </div>

      <main className="flex-grow relative z-10">
        <div className="container mx-auto px-4 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-6xl font-extrabold text-purple-800 drop-shadow-lg mb-4">
              TROUVEZ VOTRE LOGEMENT IDÉAL
            </h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Centralisez vos logements préférés en un seul endroit et facilitez votre recherche.
            </p>
          </div>

          {/* Boutons d’action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
          >
            <Bouton
              destination="/allAppartement"
              style="bg-white text-purple-700 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all group"
            >
              <Building2 className="w-16 h-16 mx-auto mb-4 text-purple-500 group-hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold mb-2">Liste des logements</h2>
              <p className="text-gray-600">Consultez tous les logements que vous avez enregistrés</p>
            </Bouton>

            <Bouton
              destination="/map"
              style="bg-white text-purple-700 rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-all group"
            >
              <Map className="w-16 h-16 mx-auto mb-4 text-purple-500 group-hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold mb-2">Carte Interactive</h2>
              <p className="text-gray-600">Visualisez facilement vos logements sur une carte</p>
            </Bouton>
          </motion.div>

          {/* Pourquoi utiliser ce site */}
          <div className="mt-32 max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-purple-800 mb-10">Pourquoi centraliser vos recherches ici ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-md">
                <Building2 className="w-12 h-12 mx-auto text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Tout est centralisé</h3>
                <p className="text-gray-600">Fini les onglets partout. Tous vos logements sont ici.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <Map className="w-12 h-12 mx-auto text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Carte interactive</h3>
                <p className="text-gray-600">Repérez facilement vos biens sur la carte.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md">
                <svg className="w-12 h-12 mx-auto text-purple-500 mb-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20l9 2-9-18-9 18 9-2z" /></svg>
                <h3 className="text-xl font-semibold mb-2">Notes personnalisées</h3>
                <p className="text-gray-600">Ajoutez vos remarques et impressions sur chaque logement.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer toujours en bas */}
      <footer className="bg-purple-100 text-purple-700 py-8 text-center text-sm z-10">
        © {new Date().getFullYear()} - MonLogement. Tous droits réservés.
      </footer>
    </div>
  );
}
