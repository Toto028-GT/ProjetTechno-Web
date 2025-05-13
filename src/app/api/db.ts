import { MongoClient } from 'mongodb';

const mongoUrl = 'mongodb://localhost:27017';
const client = new MongoClient(mongoUrl);

interface Apartment {
  id: number,
  name: string,
  adresse: string,
  image: string,
  prix: number,
  superficie: number,
  chambres: number,
  sdb: number,
  parking: boolean,
  internet: boolean,
  type: string
}

export const getCollections = async() => {
  try{
    await client.connect();
    const collection = client.db('logement').collection<Apartment>('logements');
    //console.log("fsfsf")
    return collection;
  }
  catch (error) {
    console.error('Error data:', error);
    //res.status(500).json({ error: 'Internal Server Error' });
  }
}
