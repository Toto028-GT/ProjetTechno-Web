'use client';

import { useActionState } from 'react';
import { register } from '@/app/lib/actions'; // changer si besoin
import { useSearchParams } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { Bouton } from '@/app/components/Bouton';

export default function SignUpForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';
  const [errorMessage, formAction, isPending] = useActionState(
    register, // action signup ici
    undefined,
  );

  return (
    <form
      action={formAction}
      className="space-y-6 bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto"
    >
      {/* Bouton retour */}
      <Bouton
        destination="/"
        style="flex items-center text-purple-600 mb-8 hover:text-purple-700"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Retour à l'accueil
      </Bouton>

      <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">
        Créez votre compte
      </h1>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="Entrez votre adresse mail"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Mot de passe
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            minLength={5}
            placeholder="Créez votre mot de passe"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none bg-white"
          />
        </div>
      </div>

      <input type="hidden" name="redirectTo" value={callbackUrl} />

      <button
        type="submit"
        disabled={isPending}
        className="w-full bg-purple-600 text-white py-3 rounded-md font-semibold hover:bg-purple-700 transition-colors disabled:opacity-50"
      >
        S'inscrire
      </button>

      {errorMessage && (
        <p className="mt-2 text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}
    </form>
  );
}
