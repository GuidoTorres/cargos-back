const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMCOND', {
    ID_COND: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    DE_COND: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMCOND',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Condicion",
        unique: true,
        fields: [
          { name: "ID_COND" },
        ]
      },
    ]
  });
};
