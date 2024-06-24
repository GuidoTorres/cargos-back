const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_EsPlConsCivil', {
    EPCCCodigo: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    EPCCAbreviatura: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    EPCCDescripcion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EPCCFormula: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    EPCTipo: {
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TB_EsPlConsCivil',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_EsPlConsCivil",
        unique: true,
        fields: [
          { name: "EPCCCodigo" },
        ]
      },
    ]
  });
};
