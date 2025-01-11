import { Router } from "express";
import { getAllTypes } from "../controllers/tipos";

const router = Router();

router.get("/", getAllTypes);

export default router;
