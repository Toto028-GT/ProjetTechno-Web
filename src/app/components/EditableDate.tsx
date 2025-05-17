"use client";

import React, { useState } from "react";

export default function EditableDate({ initialDate, appartId }: { initialDate: string, appartId: any }) {
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = e.target.value; // format 'YYYY-MM-DD'
    setSelectedDate(newDate);

    try {
        const res = await fetch('/api/updateVisiteDate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: newDate, appartId })
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
    <div className="flex items-center space-x-2">
      <span className="text-gray-700 font-medium">Dernière visite :</span>
      <input
        type="date"
        value={selectedDate.slice(0, 10)} 
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-2 py-1"
      />
    </div>
  );
}