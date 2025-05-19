'use client';
import React, { useState } from "react";

export function VisiteStatus({ initialStatus, appartId }: { initialStatus: "visiter" | "non visiter" | "visite prévu", appartId: any }) {
    const [status, setStatus] = useState(initialStatus);

    const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newStatus = e.target.value as "visiter" | "non visiter" | "visite prévu";
        setStatus(newStatus);

        try {
            const res = await fetch('/api/updateVisite', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus, appartId })
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
        <select
            value={status}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-2 py-1"
        >
            <option value="visiter">Visité</option>
            <option value="visite prévu">Visite prévu</option>
            <option value="non visiter">Non visité</option>
        </select>
    );
}
