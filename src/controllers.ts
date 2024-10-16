import { Request, Response } from 'express';

export function getHomePage(req: Request, res: Response) {
	res.render("home",{title: "til",
    name: "name",
    description: "description"});
}