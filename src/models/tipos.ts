import { DataTypes } from 'sequelize';
import sequelize from '../db';

const Tipo = sequelize.define('Tipo', {
  id_tipo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  clasificacion_edad: {
    type: DataTypes.ENUM('NIÑOS', 'JOVENES', 'ADULTOS'), // Ejemplo de valores posibles
    allowNull: false, // Este campo es obligatorio
  },
  sexo: {
    type: DataTypes.ENUM('F', 'M'), // Valores posibles para el sexo
    allowNull: false, // Este campo también es obligatorio
  }
}, {
  tableName: 'tipos', // Nombre de la tabla en la base de datos
  timestamps: false, // Si la tabla tiene campos de fecha (createdAt, updatedAt), puedes quitar esto
});

export default Tipo;
