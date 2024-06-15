const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_USUARIO_CCOSTO_BK_III', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    CUSER_ID: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_USUARIO_CCOSTO_BK_III',
    schema: 'dbo',
    timestamps: false
  });
};
