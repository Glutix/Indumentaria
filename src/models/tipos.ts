import { DataTypes, Model } from "sequelize";
import sequelize from "../db";

//? Interfaces
import { TypesAttributes } from "../interfaces/tipos";

export const Tipo = sequelize.define<Model<TypesAttributes>>(
  "Tipo",
  {
    id_tipo: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    clasificacion_edad: {
      type: DataTypes.ENUM("NIÑOS", "JOVENES", "ADULTOS"), // Ejemplo de valores posibles
      allowNull: false, // Este campo es obligatorio
    },
    sexo: {
      type: DataTypes.ENUM("F", "M"), // Valores posibles para el sexo
      allowNull: false, // Este campo también es obligatorio
    },
  },
  {
    tableName: "tipos", // Nombre de la tabla en la base de datos
    timestamps: false, // Si la tabla tiene campos de fecha (createdAt, updatedAt), puedes quitar esto
  }
);
