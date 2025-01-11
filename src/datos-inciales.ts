import { CreateTypesAttributes, Edades, Sexo } from "./interfaces/tipos";

// Tipos a insertar manualmente
const tipos: CreateTypesAttributes = [
  {
    clasificacion_edad: Edades.NINIOS,
    sexo: Sexo.MASCULINO,
  },
  {
    clasificacion_edad: Edades.NINIOS,
    sexo: Sexo.FEMENINO,
  },
  {
    clasificacion_edad: Edades.JOVENES,
    sexo: Sexo.MASCULINO,
  },
  {
    clasificacion_edad: Edades.JOVENES,
    sexo: Sexo.FEMENINO,
  },
  {
    clasificacion_edad: Edades.ADULTOS,
    sexo: Sexo.MASCULINO,
  },
  {
    clasificacion_edad: Edades.ADULTOS,
    sexo: Sexo.FEMENINO,
  },
];

export const loadTypes = async () => {
  try {
    // Asegurarse de que el modelo está completamente cargado
    const { Tipo } = await import("./models/tipos");

    // Verificar si ya existen tipos en la base de datos
    const typesFound = await Tipo.findAll();

    // Si no existen tipos, cargar los tipos predeterminados
    if (typesFound.length === 0) {
      await Tipo.bulkCreate(tipos);
      console.log("Tipos cargados correctamente.");
    } else {
      console.log("Los tipos ya existen en la base de datos.");
    }
  } catch (error) {
    console.error("Error al cargar los tipos:", error);
  }
};
