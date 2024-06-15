const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEG_POLITICA', {
    NEMONICO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    VALOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    POLITICA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SEG_POLITICA',
    schema: 'dbo',
    timestamps: false
  });
};
