const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EQUIVALENCIA_META', {
    META_SIGA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    META_SIAF: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'EQUIVALENCIA_META',
    schema: 'dbo',
    timestamps: false
  });
};
