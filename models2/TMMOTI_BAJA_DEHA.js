const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMMOTI_BAJA_DEHA', {
    ID_MOTI_BAJA_DEHA: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    DE_MOTI_BAJA_DEHA: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMMOTI_BAJA_DEHA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_MotivoBajaDerechoHabiente",
        unique: true,
        fields: [
          { name: "ID_MOTI_BAJA_DEHA" },
        ]
      },
    ]
  });
};
