const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TA_EJECUTORA', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    EJECUTORA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    C_PLIEGO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    D_PLIEGO: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    C_SECTOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    D_SECTOR: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TA_EJECUTORA',
    schema: 'dbo',
    timestamps: false
  });
};
