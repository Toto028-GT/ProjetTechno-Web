const { MongoClient } = require('mongodb');

const mongoUrl = 'mongodb://localhost:27017';
const client = new MongoClient(mongoUrl);

export const getCollections = async() => {
  try{
    await client.connect();
    const collection = client.db().collection('logements');
    return collection;
  }
  catch (error) {
    console.error('Error data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
