const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_techo_cn_fase', {
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
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false
    },
    SECUENCIA1: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CATEG_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FUNCION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    sec_func: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PORC_TECHO: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    PPTO_PROGRA: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PPTO_APROB: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PPTO_ASIGNADO: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PPTO_MODIF: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MNTO_PROGRA: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MNTO_ASIG: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MNTO_APROB: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MNTO_MODIF: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    INDICADOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PAAC_INICIAL: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PAAC_MODIF: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PORC_ASIG: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    CUADRE_PPTO_PROGRA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CUADRE_PPTO_MODIF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CUADRE_PPTO_APROB: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CUADRE_PPTO_ASIGNA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PPTO_RESER: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    EJEC_01: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    EJEC_02: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    EJEC_03: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    EJEC_04: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    EJEC_05: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    EJEC_06: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    EJEC_07: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    EJEC_08: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    EJEC_09: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    EJEC_10: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    EJEC_11: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    EJEC_12: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PPTO_CONTAB: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PPTO_PIA: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PPTO_CPIA: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PRE_EJEC_01: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PRE_EJEC_02: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PRE_EJEC_03: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PRE_EJEC_04: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PRE_EJEC_05: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PRE_EJEC_06: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PRE_EJEC_07: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PRE_EJEC_08: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PRE_EJEC_09: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PRE_EJEC_10: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PRE_EJEC_11: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PRE_EJEC_12: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PROYECTO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SUB_FUENTE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    RESER_PAO: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    RESER_PROCESO: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    SEC_FUNC_PROP: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    FLAG_META_APROB: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CENTRO_COSTO_PRESUP: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FONDO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CODIGO_DESTINO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PAAC_AUTORIZADO: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PPTO_RESER2: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    FASE_CUADRO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmp_techo_cn_fase',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_FASE_1",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
          { name: "SECUENCIA1" },
        ]
      },
      {
        name: "pk_techo_fase_1",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
          { name: "SECUENCIA1" },
        ]
      },
    ]
  });
};
