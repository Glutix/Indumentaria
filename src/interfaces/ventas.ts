enum TipoPago {
  TRANSFERENCIA = "TRANSFERENCIA",
  EFECTIVO = "EFECTIVO",
}

export interface VentaAttributes {
  id_venta: number;
  id_producto: number;
  id_lote: number;
  cantidad: number;
  tipo_pago: TipoPago;
  monto: number;
  fecha_venta: Date;
}

export interface VentaCreationAttributes
  extends Omit<VentaAttributes, "id_venta"> {}
