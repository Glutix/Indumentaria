import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../db";
import Tipo from "./tipos";

interface ProductoAttributes {
  id_producto: number;
  id_tipo: number;
  nombre: string;
  descripcion?: string | null;
  material?: string | null;
  talle: string;
  marca?: string | null;
  es_activo: boolean;
}

interface ProductoCreationAttributes extends Optional<ProductoAttributes, "id_producto"> {}

const Producto = sequelize.define<ProductoModel>("Producto", {
		id_producto: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		id_tipo: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "tipos", // Relaciona con la tabla 'tipos'
				key: "id_tipo",
			},
		},
		nombre: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		descripcion: {
			type: DataTypes.TEXT,
			allowNull: true, // Este campo puede ser nulo si no siempre se proporciona una descripción
		},
		material: {
			type: DataTypes.STRING,
			allowNull: true, // Este campo puede ser nulo si no siempre se proporciona un material
		},
		talle: {
			type: DataTypes.STRING,
			allowNull: false, // Este campo puede ser nulo si no siempre se proporciona un talle
		},
		marca: {
			type: DataTypes.STRING,
			allowNull: true, // Este campo puede ser nulo si no siempre se proporciona una marca
			defaultValue: null, // Por defecto es null
		},
		es_activo: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true, // Asumimos que el producto está activo por defecto
		},
	},
	{
		tableName: "productos", // Nombre de la tabla en la base de datos
		timestamps: false, // Si la tabla tiene campos de fecha (createdAt, updatedAt), puedes quitar esto
	}
);

// Relación: Un producto pertenece a un tipo
Producto.belongsTo(Tipo, {
	foreignKey: "id_tipo",
	as: "tipo",
});

export default Producto;

export interface ProductoModel extends Model<ProductoAttributes, ProductoCreationAttributes>, ProductoAttributes {}