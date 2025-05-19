import { Bouton } from "@/app/components/Bouton";
import { ArrowLeft } from "lucide-react";
import * as React from "react";
import AppartInfo from "../temp.tsx";

export default function AppartProfile({ params }: { params: { id: string } }) {
  const { id } = params;
  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-50 via-purple-100 to-purple-50">
      <main className="max-w-7xl mx-auto px-12 py-10 sm:px-14 lg:px-24">
        <Bouton
          destination="/allAppartement"
          style="inline-flex items-center text-purple-600 mb-8 font-semibold hover:text-purple-700"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Retour
        </Bouton>

          <AppartInfo id={id} />

      </main>
    </div>
  );
}
