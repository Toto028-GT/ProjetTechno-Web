import { Request, Response } from "express";
import { getAllElement,getElementById,postElement,deleteElement,updateElement } from "./models";
import { ObjectId } from "mongodb";

const jwt = require('jsonwebtoken');

export function getHomePage(req: Request, res: Response) {
  res.render("home", {
    title: "HOME",
    name: "HOME",
    description: "Voici la page home.",
  });
}

export function getAppartPage(req: Request, res: Response) {
  res.render("appart", { title: "Appartements" });
}

export async function getLogements(req: Request, res: Response) {
  //console.log(await getAllElement())
  res.json(await getAllElement());
}

export async function getLogementsById(req: Request, res: Response) {
  const logementId = req.params.id;
  if (!ObjectId.isValid(logementId)) {
    return res.status(400).json({ error: 'ID invalide' });
  }
  console.log(await getElementById(new ObjectId(logementId)))
  res.json(await getElementById(new ObjectId(logementId)));
} 

export async function postLogements(req: Request, res: Response) {
  const logement = req.body;
  res.status(200).json(postElement(logement))
} 

export async function deleteLogements(req: Request, res: Response) {
  const logementId = req.params.id;
  if (!ObjectId.isValid(logementId)) {
    return res.status(400).json({ error: 'ID invalide' });
  }
  //console.log(await deleteElement(new ObjectId(logementId)))
  res.status(200).json(await deleteElement(new ObjectId(logementId)));
} 

export async function updateLogements(req: Request, res: Response) {
  const update = req.body;
  const logementId = req.params.id;
  if (!ObjectId.isValid(logementId)) {
    return res.status(400).json({ error: 'ID invalide' });
  }
  console.log(update)
  //console.log(await deleteElement(new ObjectId(logementId)))
  res.status(200).json(await updateElement(new ObjectId(logementId),update));
} 

export function authenticateToken(req:any, res:any,next:any) {
  const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
  if (!token) return res.status(401).send('Accès non autorisé : Aucun token fourni.');
  
  jwt.verify(token, process.env.JWT_SECRET, (err:any, user:any) => {
      if (err) return res.status(403).send('Token invalide.');
      req.user = user;
      next();
  });
}

const users = [
  { username: 'testuser', password: "test1" } // Password: "password123"
 ];

export function getTokenLogin(req:any,res:any){
  let user = null;
  const { username, password } = req.body;
  user = users.find(u => u.username === username);
  if (user===undefined) {
      return res.sendStatus(401);
      //return res.render('user', { error: 'Nom d’utilisateur incorrect.' });
  }
  
  const match = user.password === password;
  if (!match) {
      return res.sendStatus(401);
      //return res.render('user', { error: 'Mot de passe incorrect.' });
  }
  
  // Authentification réussie
  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  //res.header({"authorization":token})
  //authenticateToken(req, res,next)
  res.render('dashboard', { username });
}

export function newRegister(req:any,res:any){
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).send('Nom d’utilisateur et mot de passe requis.');

  // Vérifier si l'utilisateur existe déjà
  const existingUser = users.find(user => user.username === username);
  if (existingUser) return res.status(400).send('Utilisateur déjà existant.');

  // Hacher le mot de passe
  users.push({ username, password: password });
  res.status(201).send('Utilisateur enregistré avec succès.');
}