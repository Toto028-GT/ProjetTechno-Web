import { Request, Response } from "express";
import { getAllElement,getElementById,postElement,deleteElement,updateElement } from "./models";
import { ObjectId } from "mongodb";

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

