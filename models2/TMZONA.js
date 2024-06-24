const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMZONA', {
    ID_ZONA: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DE_ZONA: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMZONA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Zona",
        unique: true,
        fields: [
          { name: "ID_ZONA" },
        ]
      },
    ]
  });
};
