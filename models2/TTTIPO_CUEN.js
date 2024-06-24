const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TTTIPO_CUEN', {
    ID_TIPO_CUEN: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    DE_TIPO_CUEN: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TTTIPO_CUEN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_TipoCuenta",
        unique: true,
        fields: [
          { name: "ID_TIPO_CUEN" },
        ]
      },
    ]
  });
};
