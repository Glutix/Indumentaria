export enum Edades {
  NINIOS = "NIÑOS",
  JOVENES = "JOVENES",
  ADULTOS = "ADULTOS",
}

export enum Sexo {
  FEMENINO = "F",
  MASCULINO = "M",
}

export interface TipoAttributes {
  id_tipo?: number;
  clasificacion_edad: Edades;
  sexo: Sexo;
}

export type CreateTipoAttributes = Omit<TipoAttributes, "id_tipo">[];
