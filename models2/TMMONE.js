const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMMONE', {
    ID_MONE: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    DE_MONE: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMMONE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Moneda",
        unique: true,
        fields: [
          { name: "ID_MONE" },
        ]
      },
    ]
  });
};
