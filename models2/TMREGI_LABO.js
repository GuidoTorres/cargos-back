const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMREGI_LABO', {
    ID_REGI_LABO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    DE_REGI_LABO: {
      type: DataTypes.STRING(7),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMREGI_LABO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_RegimenLaboral",
        unique: true,
        fields: [
          { name: "ID_REGI_LABO" },
        ]
      },
    ]
  });
};
