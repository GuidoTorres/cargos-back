const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TA_PRECIOS', {
    ANO_ORDEN: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    UE_SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    UE_NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ITEM_CATALOGO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    D_ITEM_CATALOGO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CANTIDAD_ITEM_BS: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    PRECIO_UNITARIO: {
      type: DataTypes.DECIMAL(19,9),
      allowNull: true
    },
    PRECIO_TOTAL: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    ESPECIFICACIONES: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FECHA_ORDEN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CONCEPTO_ORDEN: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    RUC_PROVEEDOR: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    D_PROVEEDOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FUENTE_FINANCIAMIENTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TA_PRECIOS',
    schema: 'dbo',
    timestamps: false
  });
};
