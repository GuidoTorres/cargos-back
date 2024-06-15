const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_REGISTRO_COMPRA_VENTA', {
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
    TIPO_REGISTRO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIAL: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    PERIODO: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    CODIGO_UNI_OPER1: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    CODIGO_UNI_OPER2: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    EXP_SIAF: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    COMPROB_PAGO_TESORERIA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_COMPROB_PAGO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_VENCIMIENTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_COMPROB_PAGO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SERIE_COMPROB_PAGO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    COMPROBANTE_PAGO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ANO_DECLAR_ADUANA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    IMP_NO_CRED_FISCAL: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    TIPO_IDENT_PROVEDR: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    RUC_PROVEEDOR: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    RAZON_SOC_PROVEDR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    VAL_FACT_EXPORT: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    BASE_IMPO_CRE_GRA: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    DESCT_BASE_IMPO_OPE_GRA: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    IMPU_VENT_CRE_GRA: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    DESCT_IGV_IPM: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    IMP_TOT_OPE_EXO: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    BASE_IMPO_CRE: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    IMPU_VENT_CRE: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    BASE_IMPO_NO_CRE: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    IMPU_VENT_NO_CRE: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    BASE_IMP_ARROZ: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    IMP_VENT_ARROZ: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    ADQUISIC_NO_GRAVA: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    IMPU_SELECTIVO: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    OTROS_CONCEPTOS: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    IMPORTE_ADQUISIC: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    CODIGO_MONEDA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(4,3),
      allowNull: true
    },
    FECHA_COMPROB_MODI: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_COMPROB_MODI: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SERIE_COMPROB_MODI: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    COMPROB_MODI: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DEPENDENCIA_ADUANA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FECHA_DEPOSITO_D: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CONST_DEPOS_DETRAC: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    COMPROB_RETENCION: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    CLASIF_ADQUISICION: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    IDENT_CONTRATO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ERROR_TIPO1: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    ERROR_TIPO2: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    ERROR_TIPO3: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    ERROR_TIPO4: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    IND_CP_MEDIO_PAGO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    ESTADO_ANOTACION: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    IND_CP_EXCLUIDO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    OBS_COMP_PAGO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    FL_CARGA_RC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_DOC_CARGA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NRO_DOC_CARGA: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_REGISTRO_COMPRA_VENTA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TES_REGISTRO_COMPRA_VENTA",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "TIPO_REGISTRO" },
          { name: "SECUENCIAL" },
        ]
      },
    ]
  });
};
