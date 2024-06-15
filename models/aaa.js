const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('aaa', {
    tipo_bien: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    grupo_bien: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    clase_bien: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    familia_bien: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    item_bien: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    clas_ue: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    mayor_ue: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sub_cta_ue: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    clas_to2: {
      type: DataTypes.STRING(14),
      allowNull: false
    },
    mayor_to2: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    sub_cta_to2: {
      type: DataTypes.STRING(8),
      allowNull: false
    },
    nombre_item: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'aaa',
    schema: 'dbo',
    timestamps: false
  });
};
