
enum edades {
	"NIÑOS",
	"JOVENES",
	"ADULTOS",
}

enum sexo {
  "F", "M"
}
export interface TipoAttributes {
	id_tipo: number;
	clasificacion_edad: edades;
  sexo: sexo;
}

export interface TipoCreationAttributes extends Omit<TipoAttributes, "id_tipo"> {}