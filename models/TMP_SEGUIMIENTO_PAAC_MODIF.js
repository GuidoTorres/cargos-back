const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_SEGUIMIENTO_PAAC_MODIF', {
    CREPORTE: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    CANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    CSEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    CTIPO_CONSOLID: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    CNRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    CTIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    CFLAG_PAAC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CNRO_PAAC: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CITEM_UNICO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    CTIPO_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CNOM_TIPO_PROCESO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    COBJETO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CNOM_OBJETO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    CESPEC_TECNICAS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ESIGLAS: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ESECTOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    EPLIEGO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PNOM_PLIEGO: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ENOM_EJECUTORA: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ERUC_EJEC: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    CINSTRUMENTO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CVALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    CFUENTE: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    INRO_ITEM: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    ITIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IGRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ICLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    IFAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    IITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    INOMBRE_ITEM: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    IUNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    INOMBRE_UNIDAD: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ICANTIDAD: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    IVALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    SSEC_ITEM: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SVALOR_REF: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    SESTADO: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    SNRO_PROCESO_SEL: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    SNRO_CONVOCATORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    SPROVEEDOR: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    SNOM_PROVEEDOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SNRO_RUC: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    SVALOR_UNIT: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    SVALOR_TOTAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    SCANTIDAD_ADJUDICADA: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    SNRO_PROV: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    SADJUDICADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CTITULO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CNOM_TIPO_PROCESO_ABREV: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMP_SEGUIMIENTO_PAAC_MODIF',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TMP_SEGUIMIENTO_PAAC_MODIF",
        unique: true,
        fields: [
          { name: "CREPORTE" },
          { name: "CANO_EJE" },
          { name: "CSEC_EJEC" },
          { name: "CTIPO_CONSOLID" },
          { name: "CNRO_CONSOLID" },
          { name: "CTIPO_GENERACION" },
          { name: "INRO_ITEM" },
          { name: "SSEC_ITEM" },
          { name: "SNRO_PROV" },
        ]
      },
    ]
  });
};
