import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../db";
import Producto from "./productos";

interface PrecioAttributes {
  id_precio: number;
  id_producto: number;
  precio_costo: number;
  fecha_ingreso: Date;
  fecha_egreso?: Date | null;
}

interface PrecioCreationAttributes extends Optional<PrecioAttributes, "id_precio" | "fecha_egreso"> {}

const Precio = sequelize.define(
	"Precio",
	{
		id_precio: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		id_producto: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "productos", // Relaciona con la tabla 'productos'
				key: "id_producto",
			},
		},
		precio_venta: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
		},
		fecha_ingreso: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		fecha_egreso: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: null, // Por defecto es null
		},
	},
	{
		tableName: "precios", // Nombre de la tabla en la base de datos
		timestamps: false, // Si la tabla tiene campos de fecha (createdAt, updatedAt), puedes quitar esto
	}
);

// Relación con el modelo Producto
Producto.hasMany(Precio, { foreignKey: "id_producto", as: "precios" });
Precio.belongsTo(Producto, { foreignKey: "id_producto", as: "producto" });

export default Precio;

export interface PrecioModel extends Model<PrecioAttributes, PrecioCreationAttributes>, PrecioAttributes {}