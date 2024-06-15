const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dnpp_clasificador_equivalencia', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    clasificador_antiguo: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    clasificador_nuevo: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'dnpp_clasificador_equivalencia',
    schema: 'dbo',
    timestamps: false
  });
};
