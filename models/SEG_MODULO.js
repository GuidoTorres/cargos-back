const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEG_MODULO', {
    APLICACION: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    MODULO: {
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
    SUPERIOR: {
      type: DataTypes.DECIMAL(38,0),
      allowNull: true
    },
    ORDEN: {
      type: DataTypes.DECIMAL(38,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SEG_MODULO',
    schema: 'dbo',
    timestamps: false
  });
};
