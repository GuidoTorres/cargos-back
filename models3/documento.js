const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define("documento", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
    },
    nombre_anio: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    trabajador: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    adeudo: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    contenido: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    fecha: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    modalidad: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      encargado: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      jefe: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      correlativo: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

  });
};
