const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_item', {
    tipo_bien: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    grupo_bien: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    clase_bien: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    familia_bien: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    item_bien: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmp_item',
    schema: 'dbo',
    timestamps: false
  });
};
