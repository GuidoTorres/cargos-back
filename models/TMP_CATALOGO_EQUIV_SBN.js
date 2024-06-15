const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_CATALOGO_EQUIV_SBN', {
    tipo_bien_ant: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    grupo_bien_ant: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    clase_bien_ant: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    familia_bien_ant: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    item_bien_ant: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    estado_ant: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    tipo_bien: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
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
    estado: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMP_CATALOGO_EQUIV_SBN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_tmp_catalogo_equiv_sbn",
        unique: true,
        fields: [
          { name: "tipo_bien" },
          { name: "grupo_bien_ant" },
          { name: "clase_bien_ant" },
          { name: "familia_bien_ant" },
          { name: "item_bien_ant" },
        ]
      },
    ]
  });
};
