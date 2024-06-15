const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_RECIBO_INGRESO', {
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
    SEC_RECIBO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_RECIBO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    FEC_RECIBO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MES_RECIBO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_ORIGEN: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    COD_CAJA: {
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
    COD_PERSONA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    MOTIVO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    VALOR_TOTAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    TIPO_PAGO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    BANCO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NRO_DOC_PAGO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FEC_DOC_PAGO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ESTADO_SIAF: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    EXP_SIAF: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    TIPO_OPERACION: {
      type: DataTypes.CHAR(1),
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
    flag_intf: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "N"
    },
    sec_ejec_siaf: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TIPO_PLANILLA_REMU: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    TIPO_DEVOLUCION: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ANIO_DEVOLUCION: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NRO_COMPR_PAGO: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_RECIBO_INGRESO',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TES_RECIBO_INGRESO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_RECIBO" },
        ]
      },
    ]
  });
};
