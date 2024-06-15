const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('STOCKS_MINIMOS', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(4),
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
    NIVEL: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    STOCK_MINIMO: {
      type: DataTypes.DECIMAL(30,6),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'STOCKS_MINIMOS',
    schema: 'dbo',
    timestamps: false
  });
};
