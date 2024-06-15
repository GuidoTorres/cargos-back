const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CATALOGO_RUBRO_X_ITEM', {
    RUBRO: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CATALOGO_RUBRO',
        key: 'TIPO'
      }
    },
    TIPO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CATALOGO_RUBRO',
        key: 'TIPO'
      }
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CATALOGO_RUBRO_X_ITEM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ind_scri_01",
        fields: [
          { name: "RUBRO" },
          { name: "TIPO" },
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
        ]
      },
      {
        name: "PK_SIG_CATALOGO_RUBRO_X_ITEM",
        unique: true,
        fields: [
          { name: "RUBRO" },
          { name: "TIPO" },
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
        ]
      },
    ]
  });
};
