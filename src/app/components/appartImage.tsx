"use client";
import React, { useState } from "react";

export function AppartImage({ src, alt }: { src: string; alt: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full h-64 bg-gray-200 cursor-pointer" onClick={() => setIsOpen(true)}>
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()} // pour éviter que le clic ferme la modale si on clique sur l'image
          />
        </div>
      )}
    </>
  );
}
