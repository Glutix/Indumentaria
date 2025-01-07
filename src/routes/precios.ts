import { Router } from "express";
import {
	getAllPrices,
	getPricesById,
	createPrice,
	updatePriceProducto,
} from "../controllers/precios";

const router = Router();

// Ruta para obtener todos los precios
router.get("/", getAllPrices);

// Ruta para obtener los precios por ID de producto
router.get("/:id_producto", getPricesById);

// Ruta para crear un nuevo precio
router.post("/", createPrice);

// Ruta para actualizar un precio
router.put("/:id_producto", updatePriceProducto);

export default router;
