const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmpDatosCTS', {
    perscodigo: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    'años': {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    meses: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    dias: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmpDatosCTS',
    schema: 'dbo',
    timestamps: false
  });
};
