const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CATALOGO_EQUIVALENCIA_127', {
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
    CODIGO_ACTIVO: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    GRUPO_ACTIVO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASE_ACTIVO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FAMILIA_ACTIVO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ITEM_ACTIVO: {
      type: DataTypes.STRING(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CATALOGO_EQUIVALENCIA_127',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CATALOGO_EQUIVAL_127",
        unique: true,
        fields: [
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
