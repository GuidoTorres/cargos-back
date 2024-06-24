const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asig$', {
    id: {
      type: DataTypes.FLOAT,
      allowNull: true,
      primaryKey: true
    },
    nombres: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    dni: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    monto: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    id_pers: {
      type: DataTypes.CHAR(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'asig$',
    schema: 'dbo',
    timestamps: false
  });
};
