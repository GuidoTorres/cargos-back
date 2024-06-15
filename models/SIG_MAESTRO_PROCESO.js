const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MAESTRO_PROCESO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_ORGANISMO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    CODIGO: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_DET: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    DESCRIPCION_ABREVIADA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CODIGO_SIAF: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CODIGO_CONSUCODE: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    GRUPO_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_MAESTRO_PROCESO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_MAESTRO_PROCESO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "TIPO_ORGANISMO" },
          { name: "CODIGO" },
          { name: "CODIGO_DET" },
        ]
      },
    ]
  });
};
