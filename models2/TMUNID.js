const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMUNID', {
    ID_UNID: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true
    },
    ID_OFIC: {
      type: DataTypes.CHAR(4),
      allowNull: false
    },
    DE_UNID: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMUNID',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Unidades",
        unique: true,
        fields: [
          { name: "ID_UNID" },
        ]
      },
    ]
  });
};
