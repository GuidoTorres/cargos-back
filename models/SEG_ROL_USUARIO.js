const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEG_ROL_USUARIO', {
    USUARIO: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    ROL: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SEG_ROL_USUARIO',
    schema: 'dbo',
    timestamps: false
  });
};
