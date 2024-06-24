const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMNACI', {
    ID_NACI: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true
    },
    DE_NACI: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMNACI',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Nacionalidad",
        unique: true,
        fields: [
          { name: "ID_NACI" },
        ]
      },
    ]
  });
};
