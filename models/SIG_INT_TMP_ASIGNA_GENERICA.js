const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INT_TMP_ASIGNA_GENERICA', {
    ANO_EJE_MOV: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC_MOV: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_AUD_MOV: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
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
    ETAPA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    FUNCION: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    SUB_PROGRAMA: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    PROGRAMA_PPTO: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    DEPARTAMENTO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    TIPO_TRANSACCION: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    GENERICA: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    CATEGORIA_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    MONTO_ASIGNADO: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    MONTO_DISTRIBUIDO: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_INT_TMP_ASIGNA_GENERICA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SIG_INT_TMP_ASIG__37B29579",
        unique: true,
        fields: [
          { name: "ANO_EJE_MOV" },
          { name: "SEC_EJEC_MOV" },
          { name: "SEC_AUD_MOV" },
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ETAPA" },
          { name: "FUNCION" },
          { name: "PROGRAMA" },
          { name: "SUB_PROGRAMA" },
          { name: "PROGRAMA_PPTO" },
          { name: "ACT_PROY" },
          { name: "FUENTE_FINANC" },
          { name: "DEPARTAMENTO" },
          { name: "TIPO_TRANSACCION" },
          { name: "GENERICA" },
          { name: "CATEGORIA_GASTO" },
        ]
      },
    ]
  });
};
