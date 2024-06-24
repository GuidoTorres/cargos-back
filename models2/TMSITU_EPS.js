const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMSITU_EPS', {
    ID_SITU_EPS: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DE_SITU_EPS: {
      type: DataTypes.STRING(75),
      allowNull: false
    },
    ES_AFIL: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMSITU_EPS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_SituacionEPS",
        unique: true,
        fields: [
          { name: "ID_SITU_EPS" },
        ]
      },
    ]
  });
};
