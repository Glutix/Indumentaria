import { Model, DataTypes, Optional } from "sequelize";
import sequelize from "../db";
import Producto from "./productos";
import Lote from "./lotes";

interface VentaAttributes {
  id_venta: number;
  id_producto: number;
  id_lote: number;
  cantidad: number;
  tipo_pago: "TRANSFERENCIA" | "EFECTIVO";
  monto: number;
  fecha_venta: Date;
}

interface VentaCreationAttributes extends Optional<VentaAttributes, "id_venta"> {}

const Venta = sequelize.define<VentaModel>("Venta", {
    id_venta: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    id_lote: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Lote,
        key: "id_lote",
      },
    },
    id_producto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "productos",
        key: "id_producto",
      },
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tipo_pago: {
      type: DataTypes.ENUM("TRANSFERENCIA", "EFECTIVO"),
      allowNull: false,
    },
    monto: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    fecha_venta: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "ventas",
    timestamps: false,
  }
);

// Relaciones
Venta.belongsTo(Producto, { foreignKey: "id_producto", as: "producto" });
Venta.belongsTo(Lote, { foreignKey: "id_lote", as: "lote" });

export default Venta;

export interface VentaModel extends Model<VentaAttributes, VentaCreationAttributes>, VentaAttributes {}