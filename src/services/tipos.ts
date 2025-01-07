import { Tipo } from "../models/tipos";

export class TipoService {
  // Obtener todos los tipos
  static async getAllTypes(): Promise<any> {
    try {
      const tipos = await Tipo.findAll();
      return tipos;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error al obtener tipos: ${error.message}`);
      }

      throw new Error("Error desconocido al obtener tipos");
    }
  }
}
