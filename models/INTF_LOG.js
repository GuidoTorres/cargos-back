const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('INTF_LOG', {
    INTERFASE: {
      type: DataTypes.CHAR(14),
      allowNull: false
    },
    SECUENCIAL: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    TABLA: {
      type: DataTypes.CHAR(8),
      allowNull: false
    },
    CAMPO: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    VALOR: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    MENSAJE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FECHA_REGISTRO: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'INTF_LOG',
    schema: 'dbo',
    timestamps: false
  });
};
