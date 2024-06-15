const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('familia_equivalencia', {
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
    tipo_patrim: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    clase_patrim: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    subtipo: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'familia_equivalencia',
    schema: 'dbo',
    timestamps: false
  });
};
