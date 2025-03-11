"use client"

import { ArrowLeft } from "lucide-react";


export default function RetourAcceuil() {
    return(
        <button
          onClick={() => {window.history.(null, '', "/")} }
          className="flex items-center text-purple-600 mb-8 hover:text-purple-700"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour à l'accueil
        </button>
    )
}