import express from 'express';
import { getHomePage } from './controllers';

const router = express.Router();
export default router;

router.get("/ping", (req, res) => res.sendStatus(200));
router.get("/", (req, res) => {
    getHomePage(req,res);
});