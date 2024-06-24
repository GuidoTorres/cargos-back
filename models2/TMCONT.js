const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMCONT', {
    ID_CONT: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DE_CONT: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMCONT',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Contratos",
        unique: true,
        fields: [
          { name: "ID_CONT" },
        ]
      },
    ]
  });
};
