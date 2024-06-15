const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Acumulado', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Grupo_Gasto',
        key: 'grupo_gasto'
      }
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ejecutora',
        key: 'sec_ejec'
      }
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    MES_EJE: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    funcion: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    programa: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    categ_gasto: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Grupo_Gasto',
        key: 'grupo_gasto'
      }
    },
    grupo_gasto: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Grupo_Gasto',
        key: 'grupo_gasto'
      }
    },
    tipo_pago: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TIPO_RECURSO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    tipo_compromiso: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    MONTO_RESERVADO: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    monto_calendario: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    MONTO_PRECOMPROMISO: {
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
    monto_comprometido_siaf: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    categoria_gasto: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'Acumulado',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_ACUMULADO_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "categ_gasto" },
          { name: "grupo_gasto" },
          { name: "funcion" },
          { name: "programa" },
        ]
      },
      {
        name: "IND_ACUMULADO_04",
        fields: [
          { name: "sec_ejec" },
        ]
      },
      {
        name: "IND_ACUMULADO_05",
        fields: [
          { name: "ANO_EJE" },
          { name: "funcion" },
          { name: "programa" },
        ]
      },
      {
        name: "IND_ACUMULADO_06",
        fields: [
          { name: "ANO_EJE" },
          { name: "categ_gasto" },
          { name: "grupo_gasto" },
        ]
      },
      {
        name: "PK_ACUMULADO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "sec_ejec" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
          { name: "MES_EJE" },
          { name: "funcion" },
          { name: "programa" },
          { name: "categ_gasto" },
          { name: "grupo_gasto" },
          { name: "tipo_pago" },
          { name: "TIPO_RECURSO" },
          { name: "tipo_compromiso" },
          { name: "categoria_gasto" },
        ]
      },
    ]
  });
};
