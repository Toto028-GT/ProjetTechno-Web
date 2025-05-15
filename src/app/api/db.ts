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
  type: string;
  location: [number, number];
  status: string;
  dateVisite: string;
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
}

export const getCollections = async() => {
  try{
    await client.connect();
    const collection = client.db('logement').collection<User>('users');
    //console.log("fsfsf")
    return collection;
  }
  catch (error) {
    console.error('Error data:', error);
    //res.status(500).json({ error: 'Internal Server Error' });
  }
}
