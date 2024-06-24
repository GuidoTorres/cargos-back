const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMPROV', {
    ID_PROV: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true
    },
    DE_PROV: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMPROV',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Provincia",
        unique: true,
        fields: [
          { name: "ID_PROV" },
        ]
      },
    ]
  });
};
