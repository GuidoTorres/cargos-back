const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMSCTR_SALU', {
    ID_SCTR_SALU: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    DE_SCTR_SALU: {
      type: DataTypes.STRING(7),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMSCTR_SALU',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_SCTRSalud",
        unique: true,
        fields: [
          { name: "ID_SCTR_SALU" },
        ]
      },
    ]
  });
};
