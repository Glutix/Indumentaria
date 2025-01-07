import { Model, DataTypes } from "sequelize";
import sequelize from "../db";

//? Models
import { Producto } from "./productos";

//? Interfaces
import { LoteAttributes } from "../interfaces/lotes";

export const Lote = sequelize.define<Model<LoteAttributes>>(
  "Lote",
  {
    id_lote: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    precio_costo: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    fecha_ingreso: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    codigo_barra: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    tableName: "lotes", // Nombre de la tabla en la base de datos
    timestamps: true,
  }
);

// Establecer relación con Producto
Producto.hasMany(Lote, { foreignKey: "id_producto", as: "lotes" });
Lote.belongsTo(Producto, { foreignKey: "id_producto", as: "producto" });
