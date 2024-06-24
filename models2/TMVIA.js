const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMVIA', {
    ID_VIA: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DE_VIA: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMVIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Via",
        unique: true,
        fields: [
          { name: "ID_VIA" },
        ]
      },
    ]
  });
};
