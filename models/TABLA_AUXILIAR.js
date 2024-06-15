const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TABLA_AUXILIAR', {
    campo: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TABLA_AUXILIAR',
    schema: 'dbo',
    timestamps: false
  });
};
