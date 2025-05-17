"use client";

import React, { useState } from "react";

export default function EditableDate({ initialDate }: { initialDate: string }) {
  const [selectedDate, setSelectedDate] = useState(initialDate);

  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-700 font-medium">Dernière visite :</span>
      <input
        type="date"
        value={selectedDate.slice(0, 10)}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="border border-gray-300 rounded-md px-2 py-1"
      />
    </div>
  );
}
