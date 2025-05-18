"use client";
import React from "react";
import { useRouter } from "next/navigation"; // ou "next/router" si tu es en Pages Router

export default function DeleteBouton({ appartId }: { appartId: any }) {
  const router = useRouter(); // instancier le router

  const handleDelete = async () => {
    const verif = "";

    try {
      console.log(appartId);

      const res = await fetch("/api/deleteAppart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: verif, appartId }),
      });

      if (!res.ok) {
        throw new Error("Erreur lors de la suppression");
      }

      const data = await res.json();
      console.log("Suppression réussie", data);

      // Redirection ici
      router.push("/allAppartement"); // remplace par l'URL souhaitée

    } catch (error) {
      console.error("Erreur:", error);
    }
  };

  return (
    <div className="absolute bottom-4 right-4">
      <button
        onClick={handleDelete}
        className="bg-red-600 hover:bg-red-700 text-white text-sm px-4 py-2 rounded-md shadow"
      >
        Supprimer
      </button>
    </div>
  );
}
