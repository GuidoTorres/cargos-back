const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TCREIN', {
    ID_PLAN: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    ID_PERS: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'TCREIN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Reintegro",
        unique: true,
        fields: [
          { name: "ID_PLAN" },
          { name: "ID_PERS" },
        ]
      },
    ]
  });
};
