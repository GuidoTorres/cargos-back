const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SGE_PAAC_MENSUAL_EXP', {
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
    TIPO_CONSOLID: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_GENERACION: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      autoIncrement: true,
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    MES_INICIAL: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    },
    MES_FINAL: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    },
    MES_PROPUESTO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    },
    TIPO_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    OBJETO: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    TIPO_CIIU: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    GRUPO_CIIU: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    CATEGORIA_CIIU: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    PAIS: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    DEPARTAMENTO: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    PROVINCIA: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    DISTRITO: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    VALOR_PLAN: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    ORGANO_CONVOCACION: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false
    },
    PRECIO_UNIT: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: false
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    FTE_FTO_IMPTO: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TIPO_IMPTO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    MONEDA: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: false
    },
    SECTOR: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    PLIEGO: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    TEXTO_PROCESO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    TEXTO_TIPO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    NRO_PAAC: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FLAG_PAAC: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SGE_PAAC_MENSUAL_EXP',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SGE_PAAC_MENSUAL__3608AD7B",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONSOLID" },
          { name: "NRO_CONSOLID" },
          { name: "TIPO_GENERACION" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
