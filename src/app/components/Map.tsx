'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from '../../../node_modules/leaflet/dist/images/marker-icon.png';
import iconShadow from '../../../node_modules/leaflet/dist/images/marker-shadow.png';
import { LatLngExpression } from 'leaflet';
import { TileLayer as LeafletTileLayer, TileLayerOptions } from 'leaflet';

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


let DefaultIcon = L.icon({
//@ts-ignorets-ignore
  iconUrl: icon,
//@ts-ignorets-ignore
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map({ logements }: MapProps) {
  const position: LatLngExpression = [48.8566, 2.3522]; // Paris coordinates

  return (
    <MapContainer 
      center={position as L.LatLngExpression}
      zoom={13} 
      style={{ height: '100%', width: '100%' }}
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
              {logement.superficie} m² - {logement.chambres} ch - {logement.sdb} sdb<br />
              {logement.parking ? "Parking" : "Sans parking"} | {logement.internet ? "Internet" : "Pas d'internet"}<br />
              Visite : {logement.dateVisite}<br />
              Statut : {logement.status}
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}