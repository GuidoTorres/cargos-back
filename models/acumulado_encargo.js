const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acumulado_encargo', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    sec_ejec2: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    expediente: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    funcion: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    programa: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    origen: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    fuente_financ: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    sec_func: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    categ_gasto: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    grupo_gasto: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    tipo_pago: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    tipo_recurso: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    tipo_compromiso: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    monto_calendario: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    monto_comprometido: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    monto_devengado: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    monto_girado: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    monto_pagado: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    monto_comprometido_siga: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    categoria_gasto: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'acumulado_encargo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_ACUMULADO_ENCARGO",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "sec_ejec2" },
          { name: "expediente" },
          { name: "funcion" },
          { name: "programa" },
          { name: "origen" },
          { name: "fuente_financ" },
          { name: "sec_func" },
          { name: "categ_gasto" },
          { name: "grupo_gasto" },
          { name: "tipo_pago" },
          { name: "tipo_recurso" },
          { name: "tipo_compromiso" },
        ]
      },
    ]
  });
};
