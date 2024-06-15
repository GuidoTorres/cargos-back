const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TIPO_CAMBIO', {
    MONEDA: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    FECHA_CAMBIO: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    VALOR_COMPRA: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    },
    VALOR_VENTA: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TIPO_CAMBIO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TIPO_CAMBIO",
        unique: true,
        fields: [
          { name: "MONEDA" },
          { name: "FECHA_CAMBIO" },
        ]
      },
    ]
  });
};
