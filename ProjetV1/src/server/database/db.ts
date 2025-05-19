import type { Collection } from 'mongodb';
const { MongoClient } = require('mongodb');

const mongoUrl = 'mongodb://localhost:27017';
const client = new MongoClient(mongoUrl);

export const getCollections = async (): Promise<Collection<User>> => {
  try{
    await client.connect();
    const collection = client.db('logement').collection('logements');
    return collection;
  }
  catch (error) {
    console.error('Error data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
