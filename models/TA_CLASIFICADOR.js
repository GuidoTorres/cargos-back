const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TA_CLASIFICADOR', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    NOMBRE_CLADIF: {
      type: DataTypes.STRING(150),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TA_CLASIFICADOR',
    schema: 'dbo',
    timestamps: false
  });
};
