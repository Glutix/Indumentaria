import { Request, Response } from "express";

// Servicios
import { TypesService } from "../services/tipos";

// Obtener todos los tipos
export const getAllTypes = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const types = await TypesService.getAllTypes();
    return res.status(200).json(types);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener tipos" });
  }
};
