import { Model, DataTypes } from "sequelize";
import sequelize from "../db";

//? Modelos
import { Producto } from "./productos";
import { Lote } from "./lotes";

//? Interfaces
import { VentaAttributes } from "../interfaces/ventas";

export const Venta = sequelize.define<Model<VentaAttributes>>(
  "Venta",
  {
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
