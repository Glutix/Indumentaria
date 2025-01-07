import { Router } from "express";
import {
  getAllLots, getLotById, //createLot, updateLot
} from "../controllers/lotes";

const router = Router();

// Ruta para obtener todos los lotes
router.get("/", getAllLots);

// Ruta para obtener los lotes por ID de producto
router.get("/:id_producto", getLotById);

// Ruta para crear un nuevo lote
//router.post("/", createLot);

// Ruta para actualizar un lote
//router.put("/:id_lote", updateLot);

export default router;
