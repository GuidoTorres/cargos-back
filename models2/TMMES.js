const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMMES', {
    ID_MES: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DE_MES: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMMES',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Meses",
        unique: true,
        fields: [
          { name: "ID_MES" },
        ]
      },
    ]
  });
};
