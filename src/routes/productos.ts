import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response): Response => {
  return res.send("Hola mundo");
});

router.get("/:id", (req: Request, res: Response): Response => {
  return res.send("Hola mundo");
});

export default router;
