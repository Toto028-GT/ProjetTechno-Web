
import { Bouton } from "@/app/components/Bouton";
import { ArrowLeft, Building2 } from "lucide-react";
import * as React from "react";
import AppartInfo from "../temp.tsx"

export default async function appartProfile({ params }: { params: { id: string } }) {
    const { id } = await params
    return (
        <div>
            <div className="min-h-screen bg-gray-50">
                <header className="bg-white shadow-sm">
                    <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Building2 className="h-6 w-6 text-indigo-600" />
                            <h1 className="text-2xl font-bold text-gray-900">Tous vos Appartement</h1>
                        </div>
                    </div>
                </header>

                <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
                    <Bouton destination="/" style="flex items-center text-purple-600 mb-8 hover:text-purple-700">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Retour à l'accueil
                    </Bouton>
                <AppartInfo id = {id} />
                </main>
            </div>
        </div>
    );


}