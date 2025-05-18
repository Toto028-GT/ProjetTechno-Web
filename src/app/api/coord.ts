export async function getCoordinatesFromAddress(address:string) {
    const encodedAddress = encodeURIComponent(address);
    const url = `https://nominatim.openstreetmap.org/search?q=${encodedAddress}&format=json&limit=1`;

    const response = await fetch(url, {
        headers: {
            'User-Agent': 'GeoApp/1.0 theocerq@gmail.com', // recommandé par l'API Nominatim
        }
    });
    
    if (!response.ok) {
        throw new Error('Erreur lors de la récupération des coordonnées');
    }

    const data = await response.json();

    if (data.length === 0) {
        return { lat: null, lng: null};
    }

    const { lat, lon } = data[0];
    return { lat: parseFloat(lat), lng: parseFloat(lon) };
}
