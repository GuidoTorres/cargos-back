const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_EsPlEscolaridad', {
    EPEsCodigo: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    EPEsAbreviatura: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    EPEsDescripcion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    EPEsFormula: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    EPEsTipo: {
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TB_EsPlEscolaridad',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_EsPlEscolaridad",
        unique: true,
        fields: [
          { name: "EPEsCodigo" },
        ]
      },
    ]
  });
};
