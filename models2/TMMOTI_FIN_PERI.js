const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMMOTI_FIN_PERI', {
    ID_MOTI_FIN_PERI: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DE_MOTI_FIN_PERI: {
      type: DataTypes.STRING(75),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMMOTI_FIN_PERI',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_MotivoFinPeriodo",
        unique: true,
        fields: [
          { name: "ID_MOTI_FIN_PERI" },
        ]
      },
    ]
  });
};
