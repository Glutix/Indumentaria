import { Request, Response } from "express";

// Servicios
import { TipoService } from "../services/tipos";

// Obtener todos los tipos
export const getAllTypes = async (
  _req: Request,
  res: Response
): Promise<Response> => {
  try {
    const tipos = await TipoService.getAllTypes();
    return res.status(200).json(tipos);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener tipos" });
  }
};
