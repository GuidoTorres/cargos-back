const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMESTA_CIVI', {
    ID_ESTA_CIVI: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    DE_ESTA_CIVI: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMESTA_CIVI',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_EstadoCivil",
        unique: true,
        fields: [
          { name: "ID_ESTA_CIVI" },
        ]
      },
    ]
  });
};
