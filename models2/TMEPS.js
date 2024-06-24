const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMEPS', {
    ID_EPS: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    DE_EPS: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    NU_RUC: {
      type: DataTypes.CHAR(11),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMEPS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_EPS",
        unique: true,
        fields: [
          { name: "ID_EPS" },
        ]
      },
    ]
  });
};
