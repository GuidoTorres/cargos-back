const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMDEPA', {
    ID_DEPA: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DE_DEPA: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMDEPA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Departamento",
        unique: true,
        fields: [
          { name: "ID_DEPA" },
        ]
      },
    ]
  });
};
