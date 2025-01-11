export interface ProductAttributes {
  id_producto?: number;
  id_tipo: number;
  nombre: string;
  descripcion?: string;
  material?: string;
  talle?: string;
  marca?: string;
  es_activo: boolean;
}

export type ProductCreationAttributes = Omit<ProductAttributes, "id_producto">;
