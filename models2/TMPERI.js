const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMPERI', {
    ID_PERI: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    DE_PERI: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMPERI',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Periodicidad",
        unique: true,
        fields: [
          { name: "ID_PERI" },
        ]
      },
    ]
  });
};
