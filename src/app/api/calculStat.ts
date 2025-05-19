interface Logement {
  id: number;
  name: string;
  adresse: string;
  image: string;
  prix: number;
  superficie: number;
  chambres: number;
  sdb: number;
  parking: boolean;
  internet: boolean;
  type: "Appartement" | "Loft" | "Studio" | "Penthouse";
  location: {
    lat: number;
    lng: number;
  };
  status: string;
  dateVisite: string;
  note: string;
}

interface UserStats {
  totalProperties: number;
  averagePrice: number;
  averageArea: number;
  bedroomsDistribution: Record<string, number>;
  mostCommonType: string;
  wasVisited: number;
  readyToVisited: number;
  notVisited: number;
}


export const calculateUserStats = (properties: Logement[]): UserStats => {
  const totalProperties = properties.length;
  const totalPrice = properties.reduce((sum, property) => sum + property.prix, 0);
  const totalArea = properties.reduce((sum, property) => sum + property.superficie, 0);

  // Calculate bedrooms distribution
  const bedroomsCount: Record<string, number> = {};
  properties.forEach(property => {
    const key = `${property.chambres}`;
    bedroomsCount[key] = (bedroomsCount[key] || 0) + 1;
  });
  
  // Find most common property type
  const typeCount: Record<string, number> = {};
  properties.forEach(property => {
    typeCount[property.type] = (typeCount[property.type] || 0) + 1;
  });
  const mostCommonType = Object.entries(typeCount).sort((a, b) => b[1] - a[1])[0][0];
  
  // Count listings by status
  const wasVisited = properties.filter(p => p.status === 'visiter').length;
  const readyToVisited = properties.filter(p => p.status === 'visite prevu').length;
  const notVisited = properties.filter(p => p.status === 'non visiter').length;
  
  return {
    totalProperties,
    averagePrice: totalProperties ? Math.round(totalPrice / totalProperties) : 0,
    averageArea: totalProperties ? Math.round(totalArea / totalProperties) : 0,
    bedroomsDistribution: bedroomsCount,
    mostCommonType,
    wasVisited,
    readyToVisited,
    notVisited
  };
};

