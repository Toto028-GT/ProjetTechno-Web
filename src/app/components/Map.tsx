'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { LatLngExpression } from 'leaflet';
import { TileLayer as LeafletTileLayer, TileLayerOptions } from 'leaflet';
import { Bouton } from './Bouton';

type  Logement = {
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
  type: string;
  location: {
    lat: number;
    lng: number;
  };
  status: string;
  dateVisite: string;
  note: string;
}

type MapProps = {
  logements: Logement[];
};


// Fix Leaflet's default icon path for production (Vercel, etc.)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

export default function Map({ logements, style }: { logements: Logement[]; style?: React.CSSProperties }) {
  let position: LatLngExpression;
  if (logements.length === 0) {
    position = [48.8566, 2.3522]; // Paris
  } else {
    const l_lat = (logements.map((x:Logement) => x.location.lat)); 
    const l_lng = (logements.map((x:Logement) => x.location.lng));
    position = [(Math.min(...l_lat)+Math.max(...l_lat))/2,(Math.min(...l_lng)+Math.max(...l_lng))/2];
  }

  return (
    <MapContainer 
      center={position as L.LatLngExpression}
      zoom={13} 
      style={style}
      scrollWheelZoom={true}
    >
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
      {logements.map((logement) => (
        <Marker
          key={logement.id}
          position={[logement.location.lat, logement.location.lng]}
        >
          <Popup>
            <div style={{ maxWidth: 200 }}>
              <strong>{logement.name}</strong><br />
              {logement.adresse}<br />
              <img src={logement.image} alt={logement.name} style={{ width: '100%', borderRadius: 8 }} /><br />
              <strong>{logement.prix} €</strong> /mois<br />
              Visite : {logement.dateVisite}<br />
              Statut : {logement.status} <br />
              <Bouton destination={`/appartProfile/${logement.id}`} style="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                              Voir les details
              </Bouton>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}