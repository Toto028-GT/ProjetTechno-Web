import { Request, Response } from 'express';

export function getHomePage(req: Request, res: Response) {
	res.render("home",{title: "HOME",
    name: "HOME",
    description: "Voici la page home."});
}

export function getAppartPage(req: Request, res: Response) {
	res.render("appart", {title: "Appartements"});
}