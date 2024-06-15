const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_ITEMS_X_CATEGORIA', {
    TIPO_BIEN: {
      type: DataTypes.CHAR(1),
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
    CATEGORIA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    SECTOR_AMBITO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    FLAG_CADENA_FRIO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG_EQUIPO_MIN: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG_VALIDA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_ITEMS_X_CATEGORIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_ITEMS_X_CAT_01",
        fields: [
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
        ]
      },
      {
        name: "PK_ITEMS_X_CAT",
        unique: true,
        fields: [
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
          { name: "CATEGORIA" },
          { name: "SECTOR_AMBITO" },
        ]
      },
    ]
  });
};
