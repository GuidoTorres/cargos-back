const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_tipo_generico', {
    CONCEPTO: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    CODIGO: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.CHAR(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_tipo_generico',
    schema: 'dbo',
    timestamps: false
  });
};
