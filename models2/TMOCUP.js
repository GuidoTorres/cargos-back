const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMOCUP', {
    ID_OCUP: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    DE_OCUP: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMOCUP',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Ocupaciones",
        unique: true,
        fields: [
          { name: "ID_OCUP" },
        ]
      },
    ]
  });
};
