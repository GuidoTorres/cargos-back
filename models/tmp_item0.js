const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_item0', {
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
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
    NOMBRE_ITEM: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FLAG_ACTIVO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_ACTIVO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    UNIDAD_ADQUIS: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    FACTOR_UNIDAD: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    PRESENTACION: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    COND_ALMAC: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    MARCA_REF: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    PRECIO_REF: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    FECHA_REF: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PRECIO_COMPRA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    FECHA_COMPRA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ITEM_CRITICO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_ITEM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PRECIO_DOLAR: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    STOCK_MINIMO: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true
    },
    STOCK_MAXIMO: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_ALTA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_ACT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BOLSA_PRODUCTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FLAG_VISUALIZA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ENVIADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_UNIDADES: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmp_item0',
    schema: 'dbo',
    timestamps: false
  });
};
