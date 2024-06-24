const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMVINC_FAMI', {
    ID_VINC_FAMI: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    DE_VINC_FAMI: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMVINC_FAMI',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_VinculoFamiliar",
        unique: true,
        fields: [
          { name: "ID_VINC_FAMI" },
        ]
      },
    ]
  });
};
