const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TCPLAN_CABE', {
    ID_PLAN: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    DE_GRUPO: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    DE_PLAN: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    ES_NORM: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    ES_REINT: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TCPLAN_CABE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_PllaCabeceras",
        unique: true,
        fields: [
          { name: "ID_PLAN" },
        ]
      },
    ]
  });
};
