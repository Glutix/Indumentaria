import { Router } from "express";
import {
  createSale, getAllSales, getSaleById, updateSale
} from "../controllers/ventas";

const router = Router();


// Ruta para obtener todos los precios
router.get("/", getAllSales);

// Ruta para obtener una venta por ID
router.get("/:id_venta", getSaleById);

// Ruta para crear una nueva venta
router.post("/", createSale); 

// Ruta para actualizar una venta por ID
router.put("/:id_venta", updateSale); 

export default router;