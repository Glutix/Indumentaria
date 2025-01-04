import { Request, Response } from "express";
import Tipo from "../models/tipos";

// Obtener todos los productos
export const getAllTypes = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const productos = await Tipo.findAll({});
		return res.status(200).json(productos);
	} catch (error) {
		console.error("Error al obtener tipos:", error);
		return res
			.status(500)
			.json({ message: "Error al obtener tipos", error });
	}
};

export const createType = async (
	req: Request,
	res: Response
): Promise<Response> => {
	const { clasificacion_edad, sexo } = req.body;
	try {
		const newType = await Tipo.create({
			clasificacion_edad,
			sexo,
		});
		return res.status(201).json(newType);
	} catch (error) {
		console.error("Error al crear tipo:", error);
		return res.status(500).json({ message: "Error al crear tipo" });
	}
};
