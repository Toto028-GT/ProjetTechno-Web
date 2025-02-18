import express from "express";
import { getHomePage, getAppartPage,getLogements,getLogementsById,postLogements,deleteLogements,updateLogements,authenticateToken,getTokenLogin, newRegister } from "./controllers";
const bodyParser = require('body-parser');
//const jwt = require('jsonwebtoken');
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

router.post('/login', async (req, res,next) => {
  getTokenLogin(req,res);
 });

router.post('/register', async (req, res) => {
  newRegister(req,res);
});
