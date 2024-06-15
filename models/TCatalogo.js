const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TCatalogo', {
    'Row #': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NOMBRE_GRU: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NOMBRE_CLA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NOMBRE_FAM: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NOMBRE_ITEM: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TCatalogo',
    schema: 'dbo',
    timestamps: false
  });
};
