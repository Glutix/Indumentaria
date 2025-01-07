import express, { Application } from "express";
import dotenv from "dotenv";
import productRoutes from "./routes/productos";
import typesRoutes from "./routes/tipos";
import pricesRoutes from "./routes/precios";
import lotsRoutes from "./routes/lotes";
import salesRoutes from "./routes/ventas";

// Cargar variables de entorno
dotenv.config();

// Crear instancia de la aplicación
const app: Application = express();

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas de productos
app.use("/productos", productRoutes);

// Usar las rutas de tipos
app.use("/tipos", typesRoutes);

// Usar las rutas de precios
app.use("/precios", pricesRoutes);

// Usar las rutas de lotes
app.use("/lotes", lotsRoutes);

// Usar las rutas de ventas
app.use("/ventas", salesRoutes);

export default app;
