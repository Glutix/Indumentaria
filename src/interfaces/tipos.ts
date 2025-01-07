export enum Edades {
  NINIOS = "Niños",
  JOVENES = "Jóvenes",
  ADULTOS = "Adultos",
}

export enum Sexo {
  FEMENINO = "F",
  MASCULINO = "M",
}

export interface TipoAttributes {
  id_tipo: number;
  clasificacion_edad: Edades;
  sexo: Sexo;
}
