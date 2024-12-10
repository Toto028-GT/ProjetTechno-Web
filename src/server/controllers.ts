import { Request, Response } from "express";
import { getAllElement } from "./models";

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

export function getLogements(req: Request, res: Response) {
  res.json(getAllElement());
}