import { Tipo } from "../models/tipos";

export class TypesService {
  // Obtener todos los tipos
  static async getAllTypes(): Promise<any> {
    try {
      const types = await Tipo.findAll();
      return types;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(`Error al obtener tipos: ${error.message}`);
      }
      throw new Error("Error desconocido al obtener tipos");
    }
  }
}
