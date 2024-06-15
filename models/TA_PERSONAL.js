const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TA_PERSONAL', {
    C_SECTOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    C_PLIEGO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    SEDE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NOMBRE_SEDE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    COD_ESTABLEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    COD_INTERNO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DESC_ESTABLEC: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CATEGORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    D_CATEGORIA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ID_PERSONAL: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    },
    D_CENTRO_COSTO: {
      type: DataTypes.STRING(180),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    D_EMPLEADO: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    GRADO_INSTRUCCION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    D_GRADO_INSTRUCCION: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    D_TIPO_DOCUMENTO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    D_NRO_DOCUMENTO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PROFESION: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    D_PROFESION: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    TIPO_EMPLEADO: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TA_PERSONAL',
    schema: 'dbo',
    timestamps: false
  });
};
