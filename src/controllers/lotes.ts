import { Request, Response } from "express";
import { Lote } from "../models/lotes";
import { Producto } from "../models/productos";

// Obtener todos los lotes
export const getAllLots = async (req: Request, res: Response) => {
  try {
    const lots = await Lote.findAll({
      include: [{ model: Producto, as: "producto" }],
      order: [["fecha_ingreso", "DESC"]],
    });
    return res.status(200).json(lots);
  } catch (error) {
    console.error("Error al obtener los lotes:", error);
    return res.status(500).json({ error: "Error al obtener los lotes" });
  }
};

// Obtener los lotes por ID de producto
export const getLotById = async (req: Request, res: Response) => {
  const { id_producto } = req.params;
  try {
    const lot = await Lote.findAll({
      where: {
        id_producto,
      },
      include: [{ model: Producto, as: "producto" }],
      order: [["fecha_ingreso", "DESC"]], // Ordenar por fecha de ingreso descendente (el más reciente)
    });
    if (!lot) {
      return res
        .status(404)
        .json({
          error: "No se encontraron Lotes para el producto especificado",
        });
    }
    return res.status(200).json(lot);
  } catch (error) {
    console.error("Error al obtener los lotes:", error);
    return res.status(500).json({ error: "Error al obtener los lotes" });
  }
};

/* // Crear un nuevo lote
export const createLot = async (req: Request, res: Response) => {
  const { id_producto, cantidad, precio_costo, fecha_ingreso, codigo_barra } =
    req.body;
  try {
    const newLote = await Lote.create({
      id_producto,
      cantidad,
      precio_costo,
      fecha_ingreso,
      codigo_barra,
    });
    return res.status(201).json(newLote);
  } catch (error) {
    console.error("Error al crear el lote:", error);
    return res.status(500).json({ error: "Error al crear el lote" });
  }
}; */

// Actualizar un lote por ID
export const updateLot = async (req: Request, res: Response) => {
  const { id_lote } = req.params;
  const { cantidad, precio_costo, fecha_ingreso, codigo_barra } = req.body;
  try {
    const lot = await Lote.findByPk(id_lote);
    if (!lot) {
      return res.status(404).json({ error: "Lote no encontrado" });
    }
    await lot.update({ cantidad, precio_costo, fecha_ingreso, codigo_barra });
    return res.status(200).json({ lote: "actualizado: ", lot });
  } catch (error) {
    console.error("Error al actualizar el lote:", error);
    return res.status(500).json({ error: "Error al actualizar el lote" });
  }
};
