const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONCEPTO_FAMILIA_EJECUTORA', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
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
    CONCEPTO_GASTO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    CICLO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TIPO_OPERACION: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TIPO_ACT_PROY: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    NRO_PLANTILLA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    INDICADOR: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MAYOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    SUB_CTA_DET: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IND_USER_MODIF: {
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
    CUSER_ID_MODIF: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_MODIF: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EQUIPO_MODIF: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CONCEPTO_FAMILIA_EJECUTORA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CONCEPTO_FAMILIA_EJECUTORA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "CONCEPTO_GASTO" },
          { name: "CICLO" },
          { name: "TIPO_OPERACION" },
          { name: "TIPO_USO" },
          { name: "TIPO_ACT_PROY" },
          { name: "NRO_PLANTILLA" },
          { name: "INDICADOR" },
        ]
      },
    ]
  });
};
