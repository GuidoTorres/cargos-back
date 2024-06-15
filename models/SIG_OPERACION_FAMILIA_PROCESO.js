const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_OPERACION_FAMILIA_PROCESO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CLASIFICADOR_GASTO',
        key: 'CLASIFICADOR'
      }
    },
    TIPO_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    CICLO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CLASIFICADOR_GASTO',
        key: 'CLASIFICADOR'
      }
    },
    MAYOR: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    SUB_CTA_DET: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_ACT_PROY: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    OPERACION: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    indicador: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IND_USER_MODIF: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_OPERACION_FAMILIA_PROCESO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_OPE_FAM_PROC_01",
        fields: [
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
        ]
      },
      {
        name: "IND_SIG_OPE_FAM_PROC_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "CLASIFICADOR" },
        ]
      },
      {
        name: "PK_SIG_OPERACION_FAMILIA_PROCESO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "TIPO_PROCESO" },
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "CICLO" },
          { name: "CLASIFICADOR" },
          { name: "MAYOR" },
          { name: "SUB_CTA" },
          { name: "SUB_CTA_DET" },
        ]
      },
    ]
  });
};
