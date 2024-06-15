const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_catalogo_procesar_items', {
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
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
    tipo: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'tmp_catalogo_procesar_items',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_tmp_catalogo_procesar_items",
        unique: true,
        fields: [
          { name: "sec_ejec" },
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
