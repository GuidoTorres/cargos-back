const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMREGI_PENS', {
    ID_REGI_PENS: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DE_REGI_PENS: {
      type: DataTypes.STRING(75),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMREGI_PENS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_RegimenPensionario",
        unique: true,
        fields: [
          { name: "ID_REGI_PENS" },
        ]
      },
    ]
  });
};
