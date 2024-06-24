const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMMUNI', {
    ID_MUNI: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    DE_MUNI: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMMUNI',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Municipalidades",
        unique: true,
        fields: [
          { name: "ID_MUNI" },
        ]
      },
    ]
  });
};
