const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_tes_registro_compras', {
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
    SECUENCIAL: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    PERIODO: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false
    },
    COdigo_Uni_OpeR1: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    CODIGO_Uni_Oper2: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    FECHA_COMPROB_PAGO: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    FECHA_VENCIMIENTO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPO_COMPROB_PAGO: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    SERIE_COMPROB_PAGO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ANO_DECLAR_ADUANA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    COMPROBANTE_PAGO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IMP_NO_CRED_FISCAL: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: true
    },
    TIPO_IDENT_PROVEDR: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    },
    RUC_PROVEEDOR: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: true
    },
    RazOn_Soc_PROVEDR: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    BASE_IMPO_CRE_GRA: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    IMPU_VENT_CRE_GRA: {
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
      allowNull: false
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(4,3),
      allowNull: true
    },
    FECHA_COMPROB_MODI: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPO_COMPROB_MODI: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    SERIE_COMPROB_MODI: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    COMPROB_MODI: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    DEPENDENCIA_ADUANA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    COMPROB_NO_DOMICIL: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_DEPOSITO_D: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    CONST_DEPOS_DETRAC: {
      type: DataTypes.STRING(24),
      allowNull: true
    },
    COMPROB_RETENCION: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    },
    ESTADO_ANOTACION: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    },
    IMP_TOT_BVENT_ODOC: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    FL_CARGA_RC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EXP_SIAF: {
      type: DataTypes.DECIMAL(10,0),
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
    tableName: 'sig_tes_registro_compras',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_tes_registro_compras",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "SECUENCIAL" },
        ]
      },
    ]
  });
};
