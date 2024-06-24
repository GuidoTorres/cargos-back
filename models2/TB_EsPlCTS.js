const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_EsPlCTS', {
    EPCTCodigo: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    EPCTAbreviatura: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    EPCTDescripcion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EPCTFormula: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    EPCTTipo: {
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TB_EsPlCTS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_EsPlCTS",
        unique: true,
        fields: [
          { name: "EPCTCodigo" },
        ]
      },
    ]
  });
};
