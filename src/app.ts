import express, { Application } from 'express';
import dotenv from 'dotenv';
import productoRoutes from './routes/productos';

// Cargar variables de entorno
dotenv.config();

// Crear instancia de la aplicación
const app: Application = express();

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas de productos
app.use('/', productoRoutes);

export default app;
