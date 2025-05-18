import * as React from "react";
import { Building2, ArrowLeft } from 'lucide-react';
import CardApparts from "./cardApparts.tsx";
import { Bouton } from "../components/Bouton.tsx";

export default function AllAppartement() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-50 via-purple-100 to-purple-50">

      <main className="max-w-7xl mx-auto px-6 py-24">
        <CardApparts />
      </main>
    </div>
  );
}
