const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEG_ROL', {
    ROL: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    APLICACION: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SEG_ROL',
    schema: 'dbo',
    timestamps: false
  });
};
