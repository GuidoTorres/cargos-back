const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ITEM_TIPO_UNIDAD_ACTIVO', {
    CODIGO_ITEM: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_TIPO_UA: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TIPO_UNIDAD_ACTIVO',
        key: 'CODIGO_TIPO_UA'
      }
    }
  }, {
    sequelize,
    tableName: 'SIG_ITEM_TIPO_UNIDAD_ACTIVO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_ITEM_TIPO_UND_ACTIVO",
        fields: [
          { name: "CODIGO_TIPO_UA" },
        ]
      },
      {
        name: "PK_SIG_ITEM_TIPO_UNIDAD_ACTIVO",
        unique: true,
        fields: [
          { name: "CODIGO_ITEM" },
          { name: "CODIGO_TIPO_UA" },
        ]
      },
    ]
  });
};
