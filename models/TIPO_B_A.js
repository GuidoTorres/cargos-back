const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TIPO_B_A', {
    CODIGO_B: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TIPO_B',
        key: 'CODIGO_B'
      }
    },
    CODIGO_A: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TIPO_A',
        key: 'CODIGO_A'
      }
    }
  }, {
    sequelize,
    tableName: 'TIPO_B_A',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_COD_A",
        fields: [
          { name: "CODIGO_A" },
        ]
      },
      {
        name: "IND_COD_B",
        fields: [
          { name: "CODIGO_B" },
        ]
      },
      {
        name: "PK_TIPO_B_A",
        unique: true,
        fields: [
          { name: "CODIGO_B" },
          { name: "CODIGO_A" },
        ]
      },
    ]
  });
};
