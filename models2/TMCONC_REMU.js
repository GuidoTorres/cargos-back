const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMCONC_REMU', {
    ID_CONC_REMU: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DE_CONC_REMU: {
      type: DataTypes.STRING(75),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMCONC_REMU',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_ConceptoRemunerativo",
        unique: true,
        fields: [
          { name: "ID_CONC_REMU" },
        ]
      },
    ]
  });
};
