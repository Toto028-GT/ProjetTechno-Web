import express from "express";
import { getHomePage, getAppartPage,getLogements,getLogementsById,postLogements,deleteLogements,updateLogements } from "./controllers";

const router = express.Router();
export default router;

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
