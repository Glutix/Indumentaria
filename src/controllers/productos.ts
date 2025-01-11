import { Request, Response } from "express";
import { ProductCreationAttributes } from "../interfaces/productos";
import { ProductService } from "../services/productos";

//! Obtener todos los productos
export const getAllProducts = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const products = await ProductService.getAllProducts();
    return res.status(200).json(products);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return res
      .status(500)
      .json({ message: "Error al obtener productos", error });
  }
};

//! Obtener un producto por ID
export const getProductById = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;

  try {
    const product = await ProductService.getProductById(Number(id));
    return res.status(200).json(product);
  } catch (error) {
    console.error("Error al obtener el producto por id:", error);
    return res
      .status(500)
      .json({ message: "Error al obtener el producto por id", error });
  }
};

//! Crear un nuevo producto
export const createProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newProduct: ProductCreationAttributes = req.body;

  try {
    const result = await ProductService.createProduct(newProduct);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ message: "Error al crear producto" });
  }
};

//! Modificar un producto por ID
export const updateProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const product: ProductCreationAttributes = req.body;

  try {
    const updatedProduct = await ProductService.updateProductById(
      Number(id),
      product
    );
    return res.status(200).json(updatedProduct);
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar un producto" });
  }
};

//? Borrado lógico de un producto por ID
export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  try {
    const product = await ProductService.deleteProductById(Number(id));
    return res.status(200).json(product);
  } catch (error) {
    console.error("Error al borrar un producto:", error);
    return res.status(500).json({ message: "Error al borrar un producto" });
  }
};
