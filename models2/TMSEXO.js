const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMSEXO', {
    ID_SEXO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    DE_SEXO: {
      type: DataTypes.STRING(9),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMSEXO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Sexo",
        unique: true,
        fields: [
          { name: "ID_SEXO" },
        ]
      },
    ]
  });
};
