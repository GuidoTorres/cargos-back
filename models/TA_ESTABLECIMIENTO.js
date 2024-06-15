const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TA_ESTABLECIMIENTO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    C_SEC_EJEC: {
      type: DataTypes.CHAR(6),
      allowNull: false
    },
    C_ESTABLEC: {
      type: DataTypes.CHAR(6),
      allowNull: false
    },
    D_ESTABLEC: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    C_SIS: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    UBIGEO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    ES_EUROPAN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    POBREZA_TOTAL: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    POBREZA_EXTREMA: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    GASTO_PERC: {
      type: DataTypes.DECIMAL(8,2),
      allowNull: true
    },
    COD_MINSA: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    DISA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    RED: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MRED: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SEC_EJEC: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    cod_establec: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    COD_INTERNO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    D_CATEGORIA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    C_CATEGORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    ES_CLAS: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    IDCCPP02: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NOMCCPP02: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CLASIF02: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    D_CLAS: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TA_ESTABLECIMIENTO',
    schema: 'dbo',
    timestamps: false
  });
};
