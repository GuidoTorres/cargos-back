const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INM_ITEM_CATALOGO', {
    CODIGO_ITEM: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true
    },
    IND_UNIDAD_ACTIVO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IND_COMPONENTE: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_INM_ITEM_CATALOGO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_INM_ITEM_CATALOGO",
        unique: true,
        fields: [
          { name: "CODIGO_ITEM" },
        ]
      },
    ]
  });
};
