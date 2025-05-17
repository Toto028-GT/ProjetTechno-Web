'use client';
 
import { Bouton } from '@/app/components/Bouton.tsx';
import { useActionState } from 'react';
import { ajoutAppart } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';
import { auth } from "../auth"
 
export default async function InsertApp() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const session = await auth();
  const [errorMessage, formAction, isPending] = useActionState(
    async (prevState: string | undefined, formData: FormData) => {
      return await ajoutAppart(prevState, formData, session?.user?.email);
    },
    undefined,
  );
 
  return (
    <form action={formAction} className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`mb-3 text-2xl`}>
          Ajouter un logement
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="name"
            >
              Nom du logement
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="name"
              name="name"
              type="text"
              placeholder="Nom du logement"
              required
            />
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="adresse"
            >
              Adresse
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="adresse"
              name="adresse"
              type="text"
              placeholder="Adresse"
              required
            />
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="image"
            >
              Image (URL)
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="image"
              name="image"
              type="text"
              placeholder="URL de l'image"
              required
            />
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="prix"
            >
              Prix (€)
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="prix"
              name="prix"
              type="number"
              min="0"
              required
            />
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="superficie"
            >
              Superficie (m²)
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="superficie"
              name="superficie"
              type="number"
              min="0"
              required
            />
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="chambres"
            >
              Chambres
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="chambres"
              name="chambres"
              type="number"
              min="0"
              required
            />
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="sdb"
            >
              Salles de bain
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="sdb"
              name="sdb"
              type="number"
              min="0"
              required
            />
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="parking"
            >
              Parking
            </label>
            <select
              id="parking"
              name="parking"
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2"
              required
            >
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </select>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="internet"
            >
              Internet
            </label>
            <select
              id="internet"
              name="internet"
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2"
              required
            >
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </select>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="type"
            >
              Type
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="type"
              name="type"
              type="text"
              placeholder="Type (ex: T2, Studio...)"
              required
            />
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="lat"
            >
              Latitude
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="lat"
              name="lat"
              type="number"
              step="any"
              required
            />
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="lng"
            >
              Longitude
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="lng"
              name="lng"
              type="number"
              step="any"
              required
            />
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="status"
            >
              Statut
            </label>
            <select
              id="status"
              name="status"
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2"
              required
            >
              <option value="non visiter">Non visité</option>
              <option value="visiter">Visité</option>
            </select>
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="dateVisite"
            >
              Date de visite
            </label>
            <input
              className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
              id="dateVisite"
              name="dateVisite"
              type="date"
              required
            />
          </div>
        </div>
        <button className="mt-4 w-full" aria-disabled={isPending}>
          Ajouter le logement
        </button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <>
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}