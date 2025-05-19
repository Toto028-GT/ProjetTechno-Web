import * as React from "react";
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import { auth } from "../auth";
import { getAllAppartFromEmail, getUserByID } from "../api/models";
import { calculateUserStats } from "../api/calculStat";
import StatsSection from "../components/StatsSection";

export default async function ProfileUser() {
    const session = await auth();
    const user = await getUserByID(session?.user?.email);
    const apartments = await getAllAppartFromEmail(session?.user?.email);
    const userStats = calculateUserStats(apartments);

    const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  };
    
    return (
        <div className="min-h-screen bg-gradient-to-tr from-purple-50 via-purple-100 to-purple-50">
        
            <main className="max-w-7xl mx-auto px-6 py-24">
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
            <div className="md:flex">
                <div className="md:shrink-0">
                    <img
                        className="h-48 w-full object-cover md:h-full md:w-48"
                        src={user?.avatar}
                        alt={`${user?.prenom} ${user?.nom}`}
                    />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-gray-800">{user?.prenom} {user?.nom}</h2>
                    </div>

                    <div className="mt-4 space-y-3">
                        <div className="flex items-center text-gray-600">
                            <Mail className="h-5 w-5 mr-2 text-blue-500" />
                            <span>{user?.email}</span>
                        </div>

                        <div className="flex items-center text-gray-600">
                            <Phone className="h-5 w-5 mr-2 text-blue-500" />
                            <span>{user?.phone}</span>
                        </div>

                        <div className="flex items-center text-gray-600">
                            <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                            <span>{user?.address}</span>
                        </div>

                        <div className="flex items-center text-gray-600">
                            <Calendar className="h-5 w-5 mr-2 text-blue-500" />
                            <span>Membre depuis {//@ts-ignore 
                            formatDate(user?.createdAt)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

                <div className="bg-white rounded-xl shadow-md p-6 mt-4">
                    <h2 className="text-xl font-bold text-gray-800 mb-6">Statistiques détaillées</h2>
                    <StatsSection stats={userStats} />

                    <div className="mt-8">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Répartition des biens</h3>
                        <div className="bg-gray-50 p-6 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="text-md font-medium text-gray-700 mb-3">Par Statut</h4>
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <div className="w-full bg-gray-200 rounded-full h-4">
                                                <div className="bg-green-500 h-4 rounded-full" style={{ width: `${(userStats.wasVisited / userStats.totalProperties) * 100}%` }}></div>
                                            </div>
                                            <span className="ml-2 text-sm text-gray-600">Déja visiter ({userStats.wasVisited})</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-full bg-gray-200 rounded-full h-4">
                                                <div className="bg-yellow-500 h-4 rounded-full" style={{ width: `${(userStats.readyToVisited / userStats.totalProperties) * 100}%` }}></div>
                                            </div>
                                            <span className="ml-2 text-sm text-gray-600">Visite prévu ({userStats.readyToVisited})</span>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="w-full bg-gray-200 rounded-full h-4">
                                                <div className="bg-blue-500 h-4 rounded-full" style={{ width: `${(userStats.notVisited / userStats.totalProperties) * 100}%` }}></div>
                                            </div>
                                            <span className="ml-2 text-sm text-gray-600">Non visiter ({userStats.notVisited})</span>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-md font-medium text-gray-700 mb-3">Par chambre(s)</h4>
                                    <div className="space-y-2">
                                        {Object.entries(userStats.bedroomsDistribution).map(([bedrooms, count]) => (
                                            <div key={bedrooms} className="flex items-center">
                                                <div className="w-full bg-gray-200 rounded-full h-4">
                                                    <div className="bg-indigo-500 h-4 rounded-full" style={{ width: `${(count / userStats.totalProperties) * 100}%` }}></div>
                                                </div>
                                                <span className="ml-2 text-sm text-gray-600">{bedrooms} Chambre ({count})</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}