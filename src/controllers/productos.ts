import { Request, Response } from 'express';
import Producto from '../models/productos';
import Tipo from '../models/tipos';

// Obtener todos los productos
export const getAllProductos = async (req: Request, res: Response): Promise<Response> => {
  try {
    const productos = await Producto.findAll({
      include: {
        model: Tipo,
        as: 'tipo',
      },
    });
    return res.json(productos);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return res.status(500).json({ message: "Error al obtener productos" });
  }
};

// Crear un nuevo producto
export const createProducto = async (req: Request, res: Response): Promise<Response> => {
  const { id_tipo, nombre, descripcion, material, talle, marca, es_activo } = req.body;

  try {
    const nuevoProducto = await Producto.create({
      id_tipo,
      nombre,
      descripcion,
      material,
      talle,
      marca,
      es_activo,
    });
    return res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error("Error al crear producto:", error);
    return res.status(500).json({ message: "Error al crear producto" });
  }
};
