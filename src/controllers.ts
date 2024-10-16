import { Request, Response } from 'express';

export function getHomePage(req: Request, res: Response) {
	res.render("home",{title: "PROJET TECH-WEB",
    name: "Appart1",
    description: "description"});
}

export function getAppartPage(req: Request, res: Response) {
	res.render("appart");
}