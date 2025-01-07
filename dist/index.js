"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mysql2_1 = __importDefault(require("mysql2"));
const dotenv_1 = __importDefault(require("dotenv"));
// Cargar variables de entorno
dotenv_1.default.config();
// Crear instancia de la aplicación
const app = (0, express_1.default)();
const PORT = process.env.PORT || 1234;
// Configurar conexión a la base de datos
const connection = mysql2_1.default.createConnection({
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
    }
    else {
        console.log("Conexión exitosa a la base de datos.");
    }
});
// Controlador
const homeController = (req, res) => {
    return res.json({ message: "Hola, mundo!" });
};
// Ruta
app.get("/", homeController);
// Ejemplo de consulta a la base de datos
app.get("/productos", (req, res) => {
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
exports.default = app;
