import { Request, Response } from "express";
import Producto from "../models/productos";
import Tipo from "../models/tipos";

// Obtener todos los productos
export const getAllProducts = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const products = await Producto.findAll({
			include: {
				model: Tipo,
				as: "tipo",
			},
		});
		return res.status(200).json(products);
	} catch (error) {
		console.error("Error al obtener productos:", error);
		return res
			.status(500)
			.json({ message: "Error al obtener productos", error });
	}
};

// Obtener un producto por ID
export const getProductById = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const { id } = req.params;

	try {
		const product = await Producto.findByPk(id);
		if (!product) {
			return res.status(404).json({ error: "Producto no encontrado" });
		}
		return res.status(200).json(product);
	} catch (error) {
		console.error("Error al obtener el producto por id:", error);
		return res
			.status(500)
			.json({ message: "Error al obtener el producto por id", error });
	}
};

// Crear un nuevo producto
export const createProduct = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const { id_tipo, nombre, descripcion, material, talle, marca, es_activo } =
		req.body;

	try {
	  const newProduct = await Producto.create({
			id_tipo,
			nombre,
			descripcion,
			material,
			talle,
			marca,
			es_activo,
		});
		return res.status(201).json(newProduct);
	} catch (error) {
		console.error("Error al crear producto:", error);
		return res.status(500).json({ message: "Error al crear producto" });
	}
};

// Modificar un producto por ID
export const updateProduct = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const { id } = req.params;
	try {
		const product = await Producto.findByPk(id);
		if (!product) {
			return res.status(404).json({ error: "Producto no encontrado" });
		}
		await product?.update(req.body);
		return res.status(200).json(product);
	} catch (error) {
		console.error("Error al actualizar un producto:", error);
		console.log(id);
		return res
			.status(500)
			.json({ message: "Error al actualizar un producto" });
	}
};

/* // Borrado lógico de un producto por ID
export const deleteProduct = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const { id } = req.params;
	try {
		const product = await Producto.findByPk(id);
		if (!product) {
			return res.status(404).json({ error: "Producto no encontrado" })
		}
		await product?.update(req.body);
		return res.status(200).json(product);
	} catch (error) {
		console.error("Error al borrar un producto:", error);
		return res.status(500).json({ message: "Error al borrar un producto" });
	}
}
 */
