const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMESSA_VIDA', {
    ID_ESSA_VIDA: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    DE_ESSA_VIDA: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMESSA_VIDA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_ESSALUDVida",
        unique: true,
        fields: [
          { name: "ID_ESSA_VIDA" },
        ]
      },
    ]
  });
};
