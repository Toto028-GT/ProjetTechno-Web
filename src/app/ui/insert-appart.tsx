'use client';

import { useActionState } from 'react';
import { ajoutAppart } from '@/app/lib/actions';
import { useSearchParams, useRouter } from 'next/navigation';
import { Bouton } from '@/app/components/Bouton';
import { ArrowLeft } from 'lucide-react';

export default function InsertApp() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const [errorMessage, formAction, isPending] = useActionState(ajoutAppart, undefined);

  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return (
    <div className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-8 max-w-3xl mx-auto">
      
      <Bouton
        destination="/"
        style="flex items-center text-purple-600 hover:text-purple-700 font-semibold mb-6"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Retour à l'accueil
      </Bouton>

      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Ajouter un logement</h1>

      <form action={formAction} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[ 
            { id: "name", label: "Nom du logement", type: "text", placeholder: "Nom du logement" },
            { id: "adresse", label: "Adresse", type: "text", placeholder: "Adresse" },
            { id: "image", label: "Image (URL)", type: "text", placeholder: "URL de l'image" },
            { id: "prix", label: "Prix (€)", type: "number" },
            { id: "superficie", label: "Superficie (m²)", type: "number" },
            { id: "chambres", label: "Chambre(s)", type: "number" },
            { id: "sdb", label: "Salle(s) de bain", type: "number" },
            { id: "type", label: "Type", type: "text", placeholder: "T2, Studio..." },
            //{ id: "lat", label: "Latitude", type: "number", step: "any" },
            //{ id: "lng", label: "Longitude", type: "number", step: "any" },
            { id: "dateVisite", label: "Date de visite", type: "date" },
            { id: "note", label: "Note", type: "text", placeholder: "Ex : Proche du métro, très lumineux" },
          ].map((input) => (
            <div key={input.id}>
              <label htmlFor={input.id} className="block text-sm font-medium text-gray-700">
                {input.label}
              </label>
              <input
                {...input}
                name={input.id}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm text-sm focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>
          ))}

          <div>
            <label htmlFor="parking" className="block text-sm font-medium text-gray-700">
              Parking
            </label>
            <select
              id="parking"
              name="parking"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm text-sm focus:ring-purple-500 focus:border-purple-500"
              required
            >
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </select>
          </div>

          <div>
            <label htmlFor="internet" className="block text-sm font-medium text-gray-700">
              Internet
            </label>
            <select
              id="internet"
              name="internet"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm text-sm focus:ring-purple-500 focus:border-purple-500"
              required
            >
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </select>
          </div>

          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700">
              Statut
            </label>
            <select
              id="status"
              name="status"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm text-sm focus:ring-purple-500 focus:border-purple-500"
              required
            >
              <option value="non visiter">Non visité</option>
              <option value="visiter">Visité</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
          aria-disabled={isPending}
          onClick={handleClick}
        >
          Ajouter le logement
        </button>

        {errorMessage && (
          <p className="text-sm text-red-500 mt-2" aria-live="polite">
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}
