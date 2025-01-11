import { Producto } from "../models/productos";
import { ProductCreationAttributes } from "../interfaces/productos";

export class ProductService {
  //! Obtener todos los productos
  static async getAllProducts() {
    try {
      const products = await Producto.findAll();
      return products;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error al obtener productos: ${error.message}`);
      }
      throw new Error("Error desconocido al obtener productos");
    }
  }

  //! Crear un producto
  static async createProduct(product: ProductCreationAttributes) {
    try {
      const newProduct = await Producto.create(product);
      return newProduct;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error al crear producto: ${error.message}`);
      }
      throw new Error("Error desconocido al crear producto");
    }
  }

  //! Obtener un producto por ID
  static async getProductById(id: number) {
    try {
      const product = await Producto.findByPk(id);
      if (!product) {
        throw new Error("Producto no encontrado");
      }
      return product;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error al obtener producto por id: ${error.message}`);
      }
      throw new Error("Error desconocido al obtener producto por id");
    }
  }

  //! Actualizar un producto por ID
  static async updateProductById(
    id: number,
    product: ProductCreationAttributes
  ) {
    try {
      const productFound = await Producto.findByPk(id);
      if (!productFound) {
        throw new Error("Producto no encontrado");
      }

      // Actualizar los campos del producto
      productFound.set(product);

      // Guardar los cambios en la base de datos
      await productFound.save();
      return productFound;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(
          `Error al actualizar producto por id: ${error.message}`
        );
      }
      throw new Error("Error desconocido al actualizar producto por id");
    }
  }

  //! Borrado lógico de un producto por ID
  static async deleteProductById(id: number) {
    try {
      const productFound = await Producto.findByPk(id);
      if (!productFound) {
        throw new Error("Producto no encontrado");
      }

      // Borrado lógico
      productFound.set({ es_activo: false });

      // Guardar los cambios en la base de datos
      await productFound.save();
      return productFound;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error al borrar producto por id: ${error.message}`);
      }
      throw new Error("Error desconocido al borrar producto por id");
    }
  }
}
