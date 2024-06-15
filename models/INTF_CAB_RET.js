const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INTF_CAB_RET', {
    SECUENCIAL: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      primaryKey: true
    },
    ANO_EJE: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC2: {
      type: DataTypes.CHAR(6),
      allowNull: true
    },
    MES_EJE: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    TIPO_OPE: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    EXP_ENCARG: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    MOD_COMP: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    TIPO_PROC: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    SEC_AREA: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    CICLO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FASE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    COD_DOC: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    SERIE_DOC: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    NUM_DOC: {
      type: DataTypes.CHAR(20),
      allowNull: false,
      primaryKey: true
    },
    FEC_DOC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CCOD_DOC: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    CNUM_DOC: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    CFEC_DOC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    M_FECHA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_ID: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    RUC: {
      type: DataTypes.CHAR(11),
      allowNull: true
    },
    ORIGEN: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FTE_FIN: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    ORGANISMO: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    CONVENIO: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    T_PAGO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    T_RECURS: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    T_COMPRO: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    ANO_CTA: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    BANCO: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    CTA_CTE: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.CHAR(6),
      allowNull: true
    },
    T_CAMBIO: {
      type: DataTypes.DECIMAL(19,15),
      allowNull: true
    },
    ANO_CTA2: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    BANCO2: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    CTA_CTE2: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    DCOD_DOC: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    DNUM_DOC: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    DFEC_DOC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DNOMBRE: {
      type: DataTypes.CHAR(60),
      allowNull: true
    },
    DMONTO: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    TIPO_GIRO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIND_T6: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TCOD_DOC: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    TNUM_DOC: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    TFEC_DOC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TMONEDA: {
      type: DataTypes.CHAR(6),
      allowNull: true
    },
    TTIPO_DEP: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TDEP_BN: {
      type: DataTypes.CHAR(13),
      allowNull: true
    },
    TCON_DEP: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    TCTA_BCO: {
      type: DataTypes.DECIMAL(11,0),
      allowNull: true
    },
    TSCTA_BCO: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    TFEC_EJEC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TFEC_REC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TOBSERVAC: {
      type: DataTypes.CHAR(100),
      allowNull: true
    },
    TLUGAR: {
      type: DataTypes.CHAR(30),
      allowNull: true
    },
    TFECHA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UE_ENVIO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    UE_ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SIAF_EXP: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    SIAF_SEC: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    SIAF_COR: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    SIAF_FEC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    INTF_EXP: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    INTF_FASE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    INTF_SEC: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    INTF_COR: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    MEF_ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    MEF_ERROR: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    MEF_MENSA: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    intf_cer: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    intf_cerse: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    intf_cerco: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    INTF_IOARR: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'INTF_CAB_RET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_INTF_CAB_RET",
        unique: true,
        fields: [
          { name: "SECUENCIAL" },
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "COD_DOC" },
          { name: "NUM_DOC" },
        ]
      },
    ]
  });
};
