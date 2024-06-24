const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_HistorialLiquidaciones', {
    HistFecha: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    PersCodigo: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    MFPeCodigo: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    PersFechInicReinicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PersFechFin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    'PersAños': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PersMeses: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PersDias: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CTSFechInicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CTSFechFin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CTSMeses: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CTSDias: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VaNGFechInicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VaNGFechFin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    'VaNGAños': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VaNGMeses: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VaNGDias: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VaTrFechInicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VaTrFechFin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    'VaTrAños': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VaTrMeses: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    VaTrDias: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BoVaFechInicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BoVaFechFin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    'BoVaAños': {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BoVaMeses: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    BoVaDias: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    GrTrFechInicio: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GrTrFechFin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GrTrMeses: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TB_HistorialLiquidaciones',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_HistorialLiquidaciones",
        unique: true,
        fields: [
          { name: "HistFecha" },
          { name: "PersCodigo" },
        ]
      },
    ]
  });
};
