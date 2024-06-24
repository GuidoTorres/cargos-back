const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMESTR_PLAN_CC', {
    ID_ESTR_PLAN: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    DE_ABRE: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    DE_NOMB: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    IN_FORM: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    IN_TIPO: {
      type: DataTypes.CHAR(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMESTR_PLAN_CC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_EsPlConsCivil2",
        unique: true,
        fields: [
          { name: "ID_ESTR_PLAN" },
        ]
      },
    ]
  });
};
