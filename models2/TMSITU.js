const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMSITU', {
    ID_SITU: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DE_SITU: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMSITU',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Situacion",
        unique: true,
        fields: [
          { name: "ID_SITU" },
        ]
      },
    ]
  });
};
