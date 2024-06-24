const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fte$', {
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
    fte: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    id_pers: {
      type: DataTypes.CHAR(6),
      allowNull: true
    },
    id_fuen: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'fte$',
    schema: 'dbo',
    timestamps: false
  });
};
