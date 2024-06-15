const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dnpp_funcion', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    funcion: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dnpp_funcion',
    schema: 'dbo',
    timestamps: false
  });
};
