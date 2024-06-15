const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TIPO_B_ITEM', {
    CODIGO_B: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_ITEM: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'TIPO_B_ITEM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TIPO_B_ITEM",
        unique: true,
        fields: [
          { name: "CODIGO_B" },
          { name: "CODIGO_ITEM" },
        ]
      },
    ]
  });
};
