import { Model, DataTypes } from "sequelize";
import sequelize from "../db";

// ? Modelos
import { Tipo } from "./tipos";

// ? Interfaces
import { ProductAttributes } from "../interfaces/productos";

export const Producto = sequelize.define<Model<ProductAttributes>>(
  "Producto",
  {
    id_producto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_tipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    material: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    talle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null,
    },
    es_activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: "productos",
    timestamps: true,
  }
);

// Relación: Un producto pertenece a un tipo
Producto.belongsTo(Tipo, { foreignKey: "id_tipo" });
