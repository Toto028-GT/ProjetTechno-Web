import * as React from "react";
import { Building2, DollarSign, Bed, Bath, Ruler, Car, Wifi, Home } from 'lucide-react';
import { ArrowLeft } from 'lucide-react';
import {getAllElement} from '../models.ts'
import CardApparts from "./cardApparts.tsx";
import Acceuil from "./RetourAcceuil.tsx"

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


export default function Appart() {
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
      <Acceuil/>
      </main>
    </div>
    </div>
  );
}
