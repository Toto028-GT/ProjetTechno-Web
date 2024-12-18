import express from "express";
import { getHomePage, getAppartPage,getLogements,getLogementsById,postLogements,deleteLogements,updateLogements } from "./controllers";
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const router = express.Router();
export default router;
router.use(bodyParser.urlencoded({ extended: true }));

router.get("/ping", (req, res) => res.sendStatus(200));
router.get("/", (req, res) => {
  getHomePage(req, res);
});

router.get("/appartements", (req, res) => {
  getAppartPage(req, res);
});

router.get("/logements", (req, res) => {
  getLogements(req,res);
});

router.get("/logements/:id", (req, res) => {
  getLogementsById(req,res);
});

router.post("/logements", (req, res) => {
  postLogements(req,res);
});

router.delete("/logements/:id", (req, res) => {
  deleteLogements(req,res);
});

router.put("/logements/:id", (req, res) => {
  updateLogements(req,res);
});

router.get("/login",(req, res) => {
  res.render('user', { error: null});
});

router.get("/register", (req, res) => {
  res.render('createuser', { error: null});
});





function authenticateToken(req:any, res:any,next:any) {
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

router.post('/login', async (req, res,next) => {
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
 });

router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).send('Nom d’utilisateur et mot de passe requis.');

  // Vérifier si l'utilisateur existe déjà
  const existingUser = users.find(user => user.username === username);
  if (existingUser) return res.status(400).send('Utilisateur déjà existant.');

  // Hacher le mot de passe
  users.push({ username, password: password });
  res.status(201).send('Utilisateur enregistré avec succès.');
});
