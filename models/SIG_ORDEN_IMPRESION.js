const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ORDEN_IMPRESION', {
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
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_ORDEN: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_ITEM: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_DETALLE: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    DESC_BIEN: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    DESC_UNIDAD: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    DESC_MARCA: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    PREC_UNITARIO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    PREC_TOTAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MARCA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    TIPO_MARCA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    META: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    MNEMONICO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MONTO_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    FLAG_IMP: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_ORDEN_IMPRESION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_ORDEN_IMPRESION",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_ORDEN" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PPTO" },
          { name: "SEC_ORDEN" },
          { name: "SEC_ITEM" },
          { name: "SEC_DETALLE" },
        ]
      },
    ]
  });
};
