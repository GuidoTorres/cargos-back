const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMCONC_AD', {
    ID_CONC: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DE_CONC: {
      type: DataTypes.STRING(120),
      allowNull: false
    },
    VA_CONC: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMCONC_AD',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_ConceptoAd",
        unique: true,
        fields: [
          { name: "ID_CONC" },
        ]
      },
    ]
  });
};
