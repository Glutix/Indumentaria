export interface ProductoAttributes {
  id_producto: number;
  id_tipo: number;
  nombre: string;
  descripcion?: string;
  material?: string;
  talle: string;
  marca?: string;
  es_activo: boolean;
}

export interface ProductoCreationAttributes extends Omit<ProductoAttributes, "id_producto"> {}