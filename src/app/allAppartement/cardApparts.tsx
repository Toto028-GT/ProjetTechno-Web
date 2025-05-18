"use server"
import { Bouton } from "../components/Bouton";
import { getAllAppartFromEmail } from "../api/models";
import { Building2, DollarSign, Bed, Bath, Ruler, Car, Wifi, Home } from 'lucide-react';
import { auth } from "../auth"

interface Apartment {
  id: number,
  name: string,
  adresse: string,
  image: string,
  prix: number,
  superficie: number,
  chambres: number,
  sdb: number,
  parking: boolean,
  internet: boolean,
  type: string
}

export default async function cardApparts() {

  const session = await auth();
  const apartments = await getAllAppartFromEmail(session?.user?.email);

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {apartments.map((apt) => (
        <div key={apt.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
          <div className="relative h-48">
            <img
              src={apt.image}
              alt={apt.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-xl font-semibold text-gray-900">{apt.name}</h2>
              <div className="flex items-center text-green-600">
                <DollarSign className="h-5 w-5" />
                <span className="text-lg font-bold">{apt.prix}</span>
              </div>
            </div>

            <p className="text-gray-600 mb-4 flex items-center">
              <Home className="h-4 w-4 mr-2" />
              {apt.adresse}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-gray-700">
                <Bed className="h-5 w-5 mr-2" />
                <span>{apt.chambres} Chambre(s)</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Bath className="h-5 w-5 mr-2" />
                <span>{apt.sdb} Salle(s) de bain</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Ruler className="h-5 w-5 mr-2" />
                <span>{apt.superficie} m²</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Car className="h-5 w-5 mr-2" />
                <span>{apt.parking ? "Parking" : "Parking non disponible"}</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-700">
                <Wifi className="h-5 w-5 mr-2" />
                <span>{apt.internet ? "Internet inclue" : "Pas d'internet"}</span>
              </div>
              <Bouton destination={`/appartProfile/${apt.id}`} style="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                Voir les details
              </Bouton>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}