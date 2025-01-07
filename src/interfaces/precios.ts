export interface PrecioAttributes {
  id_precio: number;
  id_producto: number;
  precio_venta: number;
  fecha_ingreso: Date;
  fecha_egreso?: Date | null;
}

export interface PrecioCreationAttributes
  extends Omit<PrecioAttributes, "id_precio" | "fecha_egreso"> {}
