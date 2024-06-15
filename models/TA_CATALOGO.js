const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TA_CATALOGO', {
    TIPO_BIEN: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    D_GRUPO_BIEN: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    D_CLASE_BIEN: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    D_FAMILIA_BIEN: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    NOMBRE_ITEM: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    CODIGO_BIEN: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    FLAG_ACTIVO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_ACTIVO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    UNIDAD_ADQUIS: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CODIGO_ONU: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    UNIDAD_ADQ_NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    UNIDAD_MED_NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TA_CATALOGO',
    schema: 'dbo',
    timestamps: false
  });
};
