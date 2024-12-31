import { Router } from 'express';
import { getAllProductos, createProducto } from '../controllers/productos';

const router = Router();

// Ruta para obtener todos los productos
router.get('/productos', getAllProductos);

// Ruta para crear un nuevo producto
router.post('/productos', createProducto);

export default router;
