const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEG_ROL_APLICACION', {
    ROL: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    APLICACION: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SEG_ROL_APLICACION',
    schema: 'dbo',
    timestamps: false
  });
};
