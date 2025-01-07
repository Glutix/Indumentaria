import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../db";
import Producto from "./productos";

interface LoteAttributes {
  id_lote: number;
  id_producto: number;
  cantidad: number;
  precio_costo: number;
  fecha_ingreso: Date;
  codigo_barra?: string | null;
}

interface LoteCreationAttributes extends Optional<LoteAttributes, "id_lote"> {}

const Lote = sequelize.define<LoteModel>("Lote", {
    id_lote: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
				model: "productos", // Relaciona con la tabla 'productos'
				key: "id_producto",
			},
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
    timestamps: false,
  }
);

// Establecer relación con Producto
Producto.hasMany(Lote, { foreignKey: "id_producto", as: "lotes" });
Lote.belongsTo(Producto, { foreignKey: "id_producto", as: "producto" });

export default Lote;

export interface LoteModel extends Model<LoteAttributes, LoteCreationAttributes>, LoteAttributes {}