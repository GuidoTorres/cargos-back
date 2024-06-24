const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMUBIG', {
    ID_UBIG: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    DE_UBIG: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMUBIG',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Ubigeo",
        unique: true,
        fields: [
          { name: "ID_UBIG" },
        ]
      },
    ]
  });
};
