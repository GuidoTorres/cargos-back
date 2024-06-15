const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEG_HISTORICO_PWD', {
    CODIGO: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    USUARIO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PASSWORD: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    FECHA: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SEG_HISTORICO_PWD',
    schema: 'dbo',
    timestamps: false
  });
};
