const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_SIG_PAAC_METAS', {
    SPID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    TIPO_CONSOLID: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    TIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    SEC_CONSOLID: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    },
    SEC_RESUMEN: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    SEC_META: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    sec_func: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_RECURSO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MES_01: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_02: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_03: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_04: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_05: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_06: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_07: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_08: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_09: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_10: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_11: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_12: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    VALOR: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    TIPO_IMPTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FTE_FTO_IMPTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TASA_IMPTO: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    VALOR_IMPTO: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_IMPTO_MONEDA: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SEC_META1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    tableName: 'TMP_SIG_PAAC_METAS',
    schema: 'dbo',
    timestamps: false
  });
};
