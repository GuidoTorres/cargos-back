const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_PLIEGO_SIAF', {
    SECTOR: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    PLIEGO: {
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
    tableName: 'TMP_PLIEGO_SIAF',
    schema: 'dbo',
    timestamps: false
  });
};
