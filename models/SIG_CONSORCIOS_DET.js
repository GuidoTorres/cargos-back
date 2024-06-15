const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONSORCIOS_DET', {
    COD_CONSORCIO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONSORCIOS',
        key: 'COD_CONSORCIO'
      }
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATISTAS',
        key: 'PROVEEDOR'
      }
    },
    TIPO_PROVEEDOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CONSORCIOS_DET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CONSORC_DET",
        unique: true,
        fields: [
          { name: "COD_CONSORCIO" },
          { name: "PROVEEDOR" },
        ]
      },
    ]
  });
};
