const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TTTIPO_PAGO', {
    ID_TIPO_PAGO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    DE_TIPO_PAGO: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TTTIPO_PAGO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_TipoPago",
        unique: true,
        fields: [
          { name: "ID_TIPO_PAGO" },
        ]
      },
    ]
  });
};
