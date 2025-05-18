import * as React from "react";
import { Building2, ArrowLeft } from 'lucide-react';
import CardApparts from "./cardApparts.tsx";
import { Bouton } from "../components/Bouton.tsx";

export default function AllAppartement() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-50 via-purple-100 to-purple-50">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Building2 className="h-7 w-7 text-purple-600" />
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              VOS LOGEMENTS
            </h1>
          </div>
          <Bouton
            destination="/"
            style="flex items-center text-purple-600 hover:text-purple-700 font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Retour à l'accueil
          </Bouton>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <CardApparts />
      </main>
    </div>
  );
}
