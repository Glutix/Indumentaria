export interface LoteAttributes {
  id_lote: number;
  id_producto: number;
  cantidad: number;
  precio_costo: number;
  fecha_ingreso: Date;
  codigo_barra?: string;
}

export interface LoteCreationAttributes
  extends Omit<LoteAttributes, "id_lote"> {}
