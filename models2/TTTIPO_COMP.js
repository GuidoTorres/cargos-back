const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TTTIPO_COMP', {
    ID_TIPO_COMP: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    DE_TIPO_COMP: {
      type: DataTypes.STRING(25),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TTTIPO_COMP',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_TipoComprobante",
        unique: true,
        fields: [
          { name: "ID_TIPO_COMP" },
        ]
      },
    ]
  });
};
