const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INT_CONSOLIDADO_SIAF', {
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
    SUBFASE: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    CORREL_ENVIO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FUENTE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NOMBRE_FUENTE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    GENERIC_CATEG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GENERIC_GRUPO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NOMBRE_GENERIC: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NOMBRE_APROY: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NOMBRE_META: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    NOMBRE_ESPECIF: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    TIPO_TRANSACCION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GENERICA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SUB_GENERICA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SUB_GENERICA_DET: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESPECIFICA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESPECIFICA_DET: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MONTO_TECHO: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MONTO_CN: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MONTO_01: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MONTO_02: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MONTO_03: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MONTO_04: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MONTO_05: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MONTO_06: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MONTO_07: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MONTO_08: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MONTO_09: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MONTO_10: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MONTO_11: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MONTO_12: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    ETAPA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_INT_CONSOLIDADO_SIAF',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SIG_INT_CONSOLID__2E292B3F",
        unique: true,
        fields: [
          { name: "ANO_EJE_MOV" },
          { name: "SEC_EJEC_MOV" },
          { name: "SEC_AUD_MOV" },
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SUBFASE" },
          { name: "CORREL_ENVIO" },
        ]
      },
    ]
  });
};
