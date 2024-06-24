const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMSCTR_PENS', {
    ID_SCTR_PENS: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    DE_SCTR_PENS: {
      type: DataTypes.STRING(14),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMSCTR_PENS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_SCTRPension",
        unique: true,
        fields: [
          { name: "ID_SCTR_PENS" },
        ]
      },
    ]
  });
};
