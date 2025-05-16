import type { NextApiRequest, NextApiResponse } from 'next';
import { MongoClient } from 'mongodb';
import { getCollections } from "../db.ts";


export async function POST (req: NextApiRequest) {
  const { email, password } = req.body;

  try {
    const mongoUrl = 'mongodb://localhost:27017';
    const client = new MongoClient(mongoUrl);
    const user = await client.db('logement').collection('users').findOne({ email });

    if (!user) {
      return Response.json({ error: 'Utilisateur non trouvé' }, { status: 404 })
    }

    // Comparaison des mots de passe (haché)
    const isMatch = await password===user.mdp;

    if (!isMatch) {
      return Response.json({ error: 'Mot de passe incorrect' }, { status: 401 }); // Retourne JSON
    }

    // Authentification réussie, retourne les informations de l'utilisateur
    return Response.json({ success: true, user: { email: user.email, name: user.name } }); // Retourne JSON
  } catch (error) {
    console.error('Erreur de connexion:', error);
    return Response.json({ error: 'Quelque chose s\'est mal passé.' }, { status: 500 }); // Retourne JSON
  }
}
