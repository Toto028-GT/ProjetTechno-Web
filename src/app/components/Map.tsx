'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from '../../../node_modules/leaflet/dist/images/marker-icon.png';
import iconShadow from '../../../node_modules/leaflet/dist/images/marker-shadow.png';
import { LatLngExpression } from 'leaflet';
import { TileLayer as LeafletTileLayer, TileLayerOptions } from 'leaflet';



let DefaultIcon = L.icon({
//@ts-ignorets-ignore
  iconUrl: icon,
//@ts-ignorets-ignore
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
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
      <Marker position={position}>
        <Popup>
          Appartement Moderne<br />
          Paris 11ème - 65m²<br />
          1 500 € /mois
        </Popup>
      </Marker>
    </MapContainer>
  );
}