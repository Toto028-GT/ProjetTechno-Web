"use client";

import { useActionState } from "react";
import { register } from "@/app/lib/actions"; // adapte si besoin
import { useSearchParams } from "next/navigation";

export default function SignUpForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const [errorMessage, formAction, isPending] = useActionState(register, undefined);

  return (
    <form
      action={formAction}
      className="space-y-6 bg-white rounded-2xl p-8 shadow-lg max-w-md mx-auto"
    >
      <h1 className="text-3xl font-bold mb-6 text-gray-900 text-center">
        Créez votre compte
      </h1>

      <div className="space-y-4">
        <div>
          <label
            htmlFor="Nom"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Nom
          </label>
          <input
            id="nom"
            name="nom"
            type="name"
            required
            placeholder="Entrez votre nom"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="Prénom"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Prénom
          </label>
          <input
            id="prenom"
            name="prenom"
            type="name"
            required
            placeholder="Entrez votre prénom"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none bg-white"
          />
        </div>

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

        <div>
          <label
            htmlFor="Phone"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            required
            placeholder="Entrez votre numéro de téléphone"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="adress"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Adresse
          </label>
          <input
            id="adress"
            name="adress"
            type="text"
            required
            placeholder="Entrez votre adresse"
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="Avatar"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Avatar
          </label>
          <input
            id="avatar"
            name="avatar"
            type="text"
            placeholder="Entrez l'URL de votre avatar"
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
