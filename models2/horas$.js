const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('horas$', {
    NU_DOCU: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NU_DIAS_TRAB: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'horas$',
    schema: 'dbo',
    timestamps: false
  });
};
