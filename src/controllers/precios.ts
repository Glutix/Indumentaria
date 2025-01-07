import { Request, Response } from "express";
import { Op } from "sequelize";
import { Precio } from "../models/precios";
import { Producto } from "../models/productos";

// Obtener todos los precios
export const getAllPrices = async (req: Request, res: Response) => {
  try {
    const prices = await Precio.findAll({
      include: [{ model: Producto, as: "producto" }],
    });

    return res.status(200).json(prices);
  } catch (error) {
    console.error("Error al obtener todos los precios:", error);
    return res
      .status(500)
      .json({ error: "Error al obtener todos los precios" });
  }
};

// Obtener los precios vigentes por ID de producto
export const getPricesById = async (req: Request, res: Response) => {
  const { id_producto } = req.params;
  try {
    // Buscar el último precio vigente
    const price = await Precio.findAll({
      where: {
        id_producto,
      },
      include: [{ model: Producto, as: "producto" }],
      order: [["fecha_ingreso", "DESC"]], // Ordenar por fecha de ingreso descendente (el más reciente)
    });

    if (!price) {
      return res.status(404).json({
        error: "No se encontraron precios para el producto especificado",
      });
    }

    return res.status(200).json(price);
  } catch (error) {
    console.error("Error al obtener los precios vigente:", error);
    return res
      .status(500)
      .json({ error: "Error al obtener los precios vigentes" });
  }
};

/* // Crear un nuevo precio
export const createPrice = async (req: Request, res: Response) => {
  try {
    const { id_producto, precio_venta, fecha_ingreso } = req.body;

    // Validar existencia del producto
    const product = await Producto.findByPk(id_producto);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    const price = await Precio.create({
      id_producto,
      precio_venta,
      fecha_ingreso,
    });

    return res.status(201).json(price);
  } catch (error) {
    console.error("Error al crear el precio:", error);
    return res.status(500).json({ error: "Error al crear el precio" });
  }
}; */

/* // Actualizar precio de un producto con historial
export const updatePriceProducto = async (req: Request, res: Response) => {
  const { id_producto } = req.params;
  const { precio_venta, fecha_ingreso } = req.body;

  try {
    // Validar si existe un precio vigente para el producto
    const currentPrice = await Precio.findOne({
      where: {
        id_producto,
        fecha_egreso: {
          [Op.is]: null, // Precio sin fecha de egreso (vigente)
        },
      },
    });

    // Si hay un precio vigente, cerrar el precio actual
    if (currentPrice) {
      await currentPrice.update({ fecha_egreso: fecha_ingreso });
    }

    // Crear un nuevo precio
    const newRegistration = await Precio.create({
      id_producto,
      precio_venta: precio_venta,
      fecha_ingreso,
    });

    return res.status(201).json({
      message: "Precio actualizado exitosamente",
      newRegistration,
    });
  } catch (error) {
    console.error("Error al actualizar el precio:", error);
    return res.status(500).json({ error: "Error al actualizar el precio" });
  }
}; */
