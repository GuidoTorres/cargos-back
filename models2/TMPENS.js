const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMPENS', {
    ID_PENS: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DE_PENS: {
      type: DataTypes.STRING(30),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMPENS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Pensiones",
        unique: true,
        fields: [
          { name: "ID_PENS" },
        ]
      },
    ]
  });
};
