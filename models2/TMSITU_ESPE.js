const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMSITU_ESPE', {
    ID_SITU_ESPE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    DE_SITU_ESPE: {
      type: DataTypes.STRING(23),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMSITU_ESPE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_SituacionEspecial",
        unique: true,
        fields: [
          { name: "ID_SITU_ESPE" },
        ]
      },
    ]
  });
};
