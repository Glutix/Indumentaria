export enum Edades {
  NINIOS = "NIÑOS",
  JOVENES = "JOVENES",
  ADULTOS = "ADULTOS",
}

export enum Sexo {
  FEMENINO = "F",
  MASCULINO = "M",
}

export interface TypesAttributes {
  id_tipo?: number;
  clasificacion_edad: Edades;
  sexo: Sexo;
}

export type CreateTypesAttributes = Omit<TypesAttributes, "id_tipo">[];
