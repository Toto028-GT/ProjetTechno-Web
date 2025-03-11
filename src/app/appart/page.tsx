"use client"
import * as React from "react";
import { Building2, DollarSign, Bed, Bath, Ruler, Car, Wifi, Home } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import {getAllElement} from '../models.ts'

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


  
export default async function Appart() {
  const router = useRouter();
  const [apartments] = React.useState<Apartment[]>(await getAllElement());
  /*const [apartments] = React.useState<Apartment[]>([
    {
      id: 1,
      name: "The Metropolitan",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800",
      price: 2400,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 1100,
      parking: true,
      internet: true,
      address: "123 Downtown Ave"
    },
    {
      id: 2,
      name: "Riverside Gardens",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800",
      price: 2100,
      bedrooms: 2,
      bathrooms: 1,
      sqft: 950,
      parking: true,
      internet: true,
      address: "456 River Street"
    },
    {
      id: 3,
      name: "Sunset Heights",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800",
      price: 2800,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1400,
      parking: true,
      internet: true,
      address: "789 Hill Road"
    }
  ]);*/

  return (
    <div>
      <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-6 w-6 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">Tous vos Appartement</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <button
          onClick={() => router.push('/')}
          className="flex items-center text-purple-600 mb-8 hover:text-purple-700"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour à l'accueil
        </button>
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
                    <span>{apt.chambres} Beds</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Bath className="h-5 w-5 mr-2" />
                    <span>{apt.sdb} Baths</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Ruler className="h-5 w-5 mr-2" />
                    <span>{apt.superficie} sqft</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Car className="h-5 w-5 mr-2" />
                    <span>{apt.parking ? "Parking" : "No parking"}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-700">
                    <Wifi className="h-5 w-5 mr-2" />
                    <span>{apt.internet ? "Internet included" : "No internet"}</span>
                  </div>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
    </div>
  );
}
