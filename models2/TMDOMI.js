const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMDOMI', {
    ID_DOMI: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    DE_DOMI: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMDOMI',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Domiciliado",
        unique: true,
        fields: [
          { name: "ID_DOMI" },
        ]
      },
    ]
  });
};
