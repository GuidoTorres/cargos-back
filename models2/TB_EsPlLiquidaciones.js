const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_EsPlLiquidaciones', {
    EPLiCodigo: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    EPLiAbreviatura: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    EPLiDescripcion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EPLiFormula: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    EPLiTipo: {
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TB_EsPlLiquidaciones',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_EsPlLiquidaciones",
        unique: true,
        fields: [
          { name: "EPLiCodigo" },
        ]
      },
    ]
  });
};
