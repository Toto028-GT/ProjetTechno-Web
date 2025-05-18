"use client";
import React, { useState } from "react";

export default function Notes({ initialNote, appartId }: { initialNote: string, appartId: any }) {
  const [note, setNote] = useState(initialNote);

  const handleChange = async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newNote = e.target.value; 
    setNote(newNote);

    try {
      const res = await fetch('/api/updateNote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newNote, appartId })  // utiliser newNote ici
      });

      if (!res.ok) {
        throw new Error('Erreur lors de la mise à jour');
      }

      const data = await res.json();
      console.log('Mise à jour réussie', data);
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-3">Ajouter des notes</h2>
      <textarea
        className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Exemple : J'aime bien la salle de bain mais il fait un peu sombre..."
        value={note}
        onChange={handleChange}
      />
    </div>
  );
}
