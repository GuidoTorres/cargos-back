const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_programa_nombre', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    PROGRAMA: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 't_programa_nombre',
    schema: 'dbo',
    timestamps: false
  });
};
