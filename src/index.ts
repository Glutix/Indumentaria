import express, { Application, Request, Response } from "express";

// Crear instancia de la aplicación
const app: Application = express();
const PORT = process.env.PORT || 1234;

// Controlador
const homeController = (req: Request, res: Response): Response => {
  return res.json({ message: "Hola, mundo!" });
};

// Ruta
app.get("/", homeController);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

export default app;
