const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_CONSUCODE_SIG_PAAC_CONS', {
    CREPORTE: {
      type: DataTypes.DECIMAL(4,0),
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
    CITEM_UNICO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    CPRECEDENTE: {
      type: DataTypes.STRING(1),
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
    CTIPO_CIIU: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CCATEGORIA_CIIU: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CGRUPO_CIIU: {
      type: DataTypes.STRING(2),
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
    CVALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    CMONEDA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    CFUENTE: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    CMES_PROPUESTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CMODAL_COMPRA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CNOM_MODAL_COMPRA: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    CORGANO_CONVOCACION: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    CDEPARTAMENTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CPROVINCIA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CDISTRITO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    COBSERVACIONES: {
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
    CFLAG_PAAC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CNRO_PAAC: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CNIVEL_DESCENT: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CCONVOCACION_PROCESO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    Cmodalidad_csc: {
      type: DataTypes.STRING(2),
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
    CDIFUSION_PAAC_OSCE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CNOMBRE_PRECEDENTE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    IUNIDAD_MEDIDA_OSCE: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    IGRUPO_BIEN_OSCE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    IITEM_BIEN_OSCE: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ITIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    },
    CMONEDA_OSCE: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CFUENTE_OSCE: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    CONU_CATALOGO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CODIGO_OSCE: {
      type: DataTypes.STRING(16),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMP_CONSUCODE_SIG_PAAC_CONS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PAAC_CONSUCODE_CONS",
        unique: true,
        fields: [
          { name: "CREPORTE" },
          { name: "CANO_EJE" },
          { name: "CSEC_EJEC" },
          { name: "CTIPO_CONSOLID" },
          { name: "CNRO_CONSOLID" },
          { name: "CTIPO_GENERACION" },
          { name: "INRO_ITEM" },
        ]
      },
    ]
  });
};
