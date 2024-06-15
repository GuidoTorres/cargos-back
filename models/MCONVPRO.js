const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MCONVPRO', {
    CODIGO_SIGA: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true
    },
    COD_SISMED: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    UNI_CONV: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MCONVPRO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_MCONVPRO_01",
        fields: [
          { name: "COD_SISMED" },
        ]
      },
      {
        name: "IND_MCONVPRO_02",
        fields: [
          { name: "CODIGO_SIGA" },
        ]
      },
      {
        name: "PK_MCONVPRO",
        unique: true,
        fields: [
          { name: "CODIGO_SIGA" },
          { name: "COD_SISMED" },
        ]
      },
    ]
  });
};
