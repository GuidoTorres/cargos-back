const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMOBRA', {
    ID_OBRA: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    DE_OBRA: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMOBRA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Obras",
        unique: true,
        fields: [
          { name: "ID_OBRA" },
        ]
      },
    ]
  });
};
