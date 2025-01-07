import { Request, Response } from "express";
import { Venta } from "../models/ventas";
import { Lote } from "../models/lotes";
import { Producto } from "../models/productos";
// import { Op } from "sequelize";

// Obtener todas las ventas
export const getAllSales = async (req: Request, res: Response) => {
  try {
    const sales = await Venta.findAll({
      include: [
        { model: Producto, as: "producto" },
        { model: Lote, as: "lote" },
      ],
      order: [["fecha_venta", "DESC"]],
    });
    return res.status(200).json(sales);
  } catch (error) {
    console.error("Error al obtener las ventas:", error);
    return res.status(500).json({ error: "Error al obtener las ventas" });
  }
};

// Obtener una venta por ID
export const getSaleById = async (req: Request, res: Response) => {
  const { id_venta } = req.params;
  try {
    const sale = await Venta.findByPk(id_venta, {
      include: [
        { model: Producto, as: "producto" },
        { model: Lote, as: "lote" },
      ],
    });
    if (!sale) {
      return res.status(404).json({ error: "Venta no encontrada" });
    }
    return res.status(200).json(sale);
  } catch (error) {
    console.error("Error al obtener la venta:", error);
    return res.status(500).json({ error: "Error al obtener la venta" });
  }
};

/* // Crear una venta y descontar cantidad del lote más viejo
export const createSale = async (req: Request, res: Response) => {
  const { id_producto, cantidad, tipo_pago, monto, fecha_venta } = req.body;

  try {
    // Obtenemos los lotes del producto, ordenados por fecha de ingreso (más antiguos primero)
    const lots = await Lote.findAll({
      where: {
        id_producto,
        cantidad: { [Op.gt]: 0 }, // Filtramos solo los lotes con cantidad disponible
      },
      order: [["fecha_ingreso", "ASC"]], // Ordenamos por fecha de ingreso (más antiguos primero)
    });

    if (lots.length === 0) {
      return res
        .status(404)
        .json({ error: "No hay lotes disponibles para este producto." });
    }

    let remainingQuantity = cantidad;
    const lotsToUpdate = [];

    // Iteramos sobre los lotes para descontar las cantidades
    for (const lot of lots) {
      if (remainingQuantity <= 0) break;

      // Si el lote tiene más cantidad de la que necesitamos, descontamos la cantidad
      if (lot.cantidad >= remainingQuantity) {
        lot.cantidad -= remainingQuantity;
        remainingQuantity = 0; // Se ha completado la venta
      } else {
        // Si el lote tiene menos cantidad de la que necesitamos, se descuenta todo el lote
        remainingQuantity -= lot.cantidad;
        lot.cantidad = 0; // Lote agotado
      }

      lotsToUpdate.push(lot);
    }

    // Si después de iterar sobre los lotes, la cantidad restante es mayor que 0, significa que no había suficiente stock
    if (remainingQuantity > 0) {
      return res
        .status(400)
        .json({ error: "No hay suficiente stock para realizar la venta." });
    }

    // Actualizamos los lotes en la base de datos
    await Promise.all(lotsToUpdate.map((lot) => lot.save()));

    // Creamos la venta
    const sale = await Venta.create({
      id_producto,
      cantidad,
      tipo_pago,
      monto,
      fecha_venta,
      // Tomamos el primer lote para la venta
      id_lote: lots[0].id_lote,
    });

    return res.status(201).json(sale);
  } catch (error) {
    console.error("Error al realizar la venta:", error);
    return res.status(500).json({ error: "Error al realizar la venta" });
  }
}; */

// Actualizar una venta por ID
export const updateSale = async (req: Request, res: Response) => {
  const { id_venta } = req.params;
  const { id_lote, id_producto, cantidad, tipo_pago, monto, fecha_venta } =
    req.body;
  try {
    const sale = await Venta.findByPk(id_venta);
    if (!sale) {
      return res.status(404).json({ error: "Venta no encontrada" });
    }
    await sale.update({
      id_lote,
      id_producto,
      cantidad,
      tipo_pago,
      monto,
      fecha_venta,
    });
    return res.status(200).json(sale);
  } catch (error) {
    console.error("Error al actualizar la venta:", error);
    return res.status(500).json({ error: "Error al actualizar la venta" });
  }
};
