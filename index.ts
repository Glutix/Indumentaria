import app from "./src/app";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

const PORT = process.env.PORT || 1234;

// Iniciar servidor
app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`);
});

/*import express, { Application, Request, Response } from "express";
const app: Application = express();
const PORT = process.env.PORT || 1234;
import mysql from "mysql2";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

// Crear instancia de la aplicación


// Configurar conexión a la base de datos
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
});

// Probar conexión
connection.connect((err) => {
  if (err) {
    console.error("Error al conectar con la base de datos:", err.message);
  } else {
    console.log("Conexión exitosa a la base de datos.");
  }
});

// Controlador
const homeController = (req: Request, res: Response): Response => {
  return res.json({ message: "Hola, mundo!" });
};

// Ruta
app.get("/", homeController);

// Ejemplo de consulta a la base de datos
app.get("/productos", (req: Request, res: Response) => {
  connection.query("SELECT * FROM productos", (err, results) => {
    if (err) {
      console.error("Error en la consulta:", err.message);
      return res.status(500).json({ error: "Error en la consulta" });
    }
    return res.json(results);
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

export default app;
*/
