const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONTRATISTA_RNP', {
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      references: {
        model: 'SIG_CONTRATISTAS',
        key: 'PROVEEDOR'
      }
    },
    TIPO_RNP: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NRO_RNP: {
      type: DataTypes.STRING(8),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CONTRATISTA_RNP',
    schema: 'dbo',
    timestamps: false
  });
};
