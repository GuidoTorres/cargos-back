const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_EsPlPracticantes', {
    EPPrCodigo: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    EPPrAbreviatura: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    EPPrDescripcion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EPPrFormula: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    EPPrTipo: {
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TB_EsPlPracticantes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_EsPlPracticantes",
        unique: true,
        fields: [
          { name: "EPPrCodigo" },
        ]
      },
    ]
  });
};
