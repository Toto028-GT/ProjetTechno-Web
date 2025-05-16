import { Building2, Map } from 'lucide-react';
import { Bouton } from "./components/Bouton";
import SideNav from '@/app/login/sidenav';

export default function Home() {
  return (
    <div className="min-h-screen  bg-[rgb(243,238,212)]">
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h1 className="text-5xl font-bold mb-8 text-gray-900">Trouvez Votre Appartement Idéal</h1>
        <SideNav/>
        <p className="text-xl mb-12 text-gray-900">Simplifiez votre recherche d'appartement avec notre plateforme intuitive</p>
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Bouton destination="/allAppartement" style="bg-white text-purple-600 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all group">
            <Building2 className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold mb-2">Liste des Appartements</h2>
            <p className="text-gray-600">Consultez tous vos appartements enregistrer</p>
          </Bouton>
          
          <Bouton destination="/map" style="bg-white text-purple-600 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all group">
            <Map className="w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform" />
            <h2 className="text-2xl font-semibold mb-2">Carte Interactive</h2>
            <p className="text-gray-600">Visualisez les appartements sur la carte</p>
          </Bouton>

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
