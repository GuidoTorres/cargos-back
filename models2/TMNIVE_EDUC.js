const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMNIVE_EDUC', {
    ID_NIVE_EDUC: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DE_NIVE_EDUC: {
      type: DataTypes.STRING(75),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMNIVE_EDUC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_NivelEducativo",
        unique: true,
        fields: [
          { name: "ID_NIVE_EDUC" },
        ]
      },
    ]
  });
};
