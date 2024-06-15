const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_centro_costo_x_item', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    centro_costo: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    tipo_bien: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    grupo_bien: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    clase_bien: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    familia_bien: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    item_bien: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sig_centro_costo_x_item',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_sig_centro_costo_x_item",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "centro_costo" },
          { name: "tipo_bien" },
          { name: "grupo_bien" },
          { name: "clase_bien" },
          { name: "familia_bien" },
          { name: "item_bien" },
        ]
      },
    ]
  });
};
