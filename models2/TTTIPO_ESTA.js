const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TTTIPO_ESTA', {
    ID_TIPO_ESTA: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DE_TIPO_ESTA: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TTTIPO_ESTA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_TipoEstablecimiento",
        unique: true,
        fields: [
          { name: "ID_TIPO_ESTA" },
        ]
      },
    ]
  });
};
