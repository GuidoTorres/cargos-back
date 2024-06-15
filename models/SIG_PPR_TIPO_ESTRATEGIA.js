const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_TIPO_ESTRATEGIA', {
    SUB_FINALIDAD: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    TIPO_ESTRATEGIA: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_TIPO_ESTRATEGIA',
    schema: 'dbo',
    timestamps: false
  });
};
