import { Router } from "express";
import {
	getAllProducts,
	createProduct,
	getProductById,
	updateProduct /* , deleteProduct */,
} from "../controllers/productos";

const router = Router();

// Ruta para obtener todos los productos
router.get("/", getAllProducts);

// Ruta para obtener un producto por ID
router.get("/:id", getProductById);

// Ruta para crear un nuevo producto
router.post("/", createProduct);

// Ruta para actualizar un producto
router.put("/:id", updateProduct);

/* // Ruta para borrado logico de un producto
router.delete('/:id', deleteProduct) */

export default router;
