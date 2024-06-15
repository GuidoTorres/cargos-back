const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SGE_CONTRATISTAS_TRX', {
    RUC_PROV: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    NOMBRE_PROV: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SGE_CONTRATISTAS_TRX',
    schema: 'dbo',
    timestamps: false
  });
};
