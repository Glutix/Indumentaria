import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import { loadTypes } from "./initData";

// Cargar variables de entorno
dotenv.config();

// Crear instancia de Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: Number(process.env.DB_PORT),
  }
);

// Función para probar la conexión
const testConnection = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos exitosa");
  } catch (error) {
    console.error("No se pudo conectar a la base de datos:", error);
    throw error;
  }
};

// Función para sincronizar los modelos y cargar datos iniciales
const syncData = async (): Promise<void> => {
  try {
    await sequelize.sync({ force: false, alter: true });
    console.log("Tablas y relaciones creadas correctamente");
  } catch (error) {
    console.error("Error al sincronizar los modelos:", error);
    throw error;
  }
};

// Función principal para inicializar todo
const initApp = async (): Promise<void> => {
  try {
    await testConnection(); // Verificar conexión
    await syncData(); // Sincronizar la base de datos
    console.log("Sequelize sincronizado correctamente.");

    // Cargar los tipos
    await loadTypes();
    console.log("Tipos cargados correctamente.");
  } catch (error) {
    console.error("Error durante la inicialización del proyecto:", error);
  }
};

// Iniciar la aplicación
initApp();

export default sequelize;
