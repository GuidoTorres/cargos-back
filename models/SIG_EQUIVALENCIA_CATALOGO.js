const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_EQUIVALENCIA_CATALOGO', {
    tipo_bien: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    grupo_bien: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    clase_bien: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    familia_bien: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    item_bien: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    grupo_bien_n: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    clase_bien_n: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    familia_bien_n: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    item_bien_n: {
      type: DataTypes.STRING(4),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_EQUIVALENCIA_CATALOGO',
    schema: 'dbo',
    timestamps: false
  });
};
