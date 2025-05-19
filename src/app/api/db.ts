import { MongoClient } from 'mongodb';

const mongoUrl = 'mongodb://localhost:27017';
const client = new MongoClient(mongoUrl);

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

interface User {
  _id: string; 
  pseudo: string;
  email: string;
  avatar: string;
  nom: string;
  prenom: string;
  mdp: string;
  logements: Logement[];
  phone : string;
  createdAt : string;
  address : string;
}

export const getCollections = async () => {
  try {
    await client.connect();
    return client.db('logement').collection<User>('users');
  } catch (error) {
    console.error('Error data:', error);
    throw new Error('Could not get MongoDB collection');
  }
}
