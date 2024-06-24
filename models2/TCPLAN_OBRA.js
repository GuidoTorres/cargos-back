const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TCPLAN_OBRA', {
    ID_OBRA: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'TCPLAN_OBRA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_PllaObras_1",
        unique: true,
        fields: [
          { name: "ID_OBRA" },
        ]
      },
    ]
  });
};
