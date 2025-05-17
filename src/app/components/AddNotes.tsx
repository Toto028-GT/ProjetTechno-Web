"use client";
import React, { useState } from "react";

export function Notes() {
  const [note, setNote] = useState("");

  const handleSave = () => {
    // TODO : Ajouter la logique pour sauvegarder la note dans la BDD
    alert(`Note enregistrée : ${note}`);
  };

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-3">Ajouter des notes</h2>
      <textarea
        className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Exemple : J'aime bien la salle de bain mais il fait un peu sombre..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <button
        className="mt-4 mb-8 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
        onClick={handleSave}
      >
        Enregistrer
      </button>
    </div>
  );
}
