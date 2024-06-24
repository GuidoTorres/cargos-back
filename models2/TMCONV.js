const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMCONV', {
    ID_CONV: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    DE_CONV: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMCONV',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Convenios",
        unique: true,
        fields: [
          { name: "ID_CONV" },
        ]
      },
    ]
  });
};
