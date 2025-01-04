import { Router } from "express";
import { getAllTypes } from "../controllers/tipos";

const router = Router();

// Ruta para obtener todos los productos
router.get("/", getAllTypes);

/*
// Ruta para crear un nuevo producto
router.post('/productos', createProducto);
*/

export default router;
