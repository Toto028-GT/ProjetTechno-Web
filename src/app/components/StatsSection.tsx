import React from 'react';
import StatCard from '@/app/components/StatCard';
import { Home, Euro, DotSquare as SquareFootage, Bed, Building, Tags } from 'lucide-react';

export interface UserStats {
  totalProperties: number;
  averagePrice: number;
  averageArea: number;
  bedroomsDistribution: Record<string, number>;
  mostCommonType: string;
  wasVisited: number;
  readyToVisited: number;
  notVisited: number;
}

interface StatsSectionProps {
  stats: UserStats;
}

const StatsSection: React.FC<StatsSectionProps> = ({ stats }) => {
  // Helper function to format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(value);
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Statistiques des logements</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <StatCard 
          title="Nombre total de logement" 
          value={stats.totalProperties} 
          icon={Home}
          color="bg-blue-500"
        />
        
        <StatCard 
          title="Loyer moyen" 
          value={formatCurrency(stats.averagePrice)} 
          icon={Euro}
          color="bg-emerald-500"
        />
        
        <StatCard 
          title="Superficie moyenne" 
          value={`${stats.averageArea} m²`} 
          icon={SquareFootage}
          color="bg-violet-500"
        />
        
        <StatCard 
          title="Plus commun" 
          value={stats.mostCommonType.charAt(0).toUpperCase() + stats.mostCommonType.slice(1)} 
          icon={Building}
          color="bg-amber-500"
        />
        
        <StatCard 
          title="Taille la plus courante" 
          value={`${Object.entries(stats.bedroomsDistribution).sort((a, b) => b[1] - a[1])[0][0]} chambre(s)`} 
          icon={Bed}
          color="bg-rose-500"
        />
        
        <StatCard 
          title="Status des logements" 
          value={`${stats.wasVisited} visiter, ${stats.notVisited} non visiter`} 
          icon={Tags}
          color="bg-cyan-500"
        />
      </div>
    </div>
  );
};

export default StatsSection;