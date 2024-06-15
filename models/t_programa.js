const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_programa', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    FUNCION: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    PROGRAMA: {
      type: DataTypes.STRING(3),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 't_programa',
    schema: 'dbo',
    timestamps: false
  });
};
