const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TTTIPO_ACTI', {
    ID_TIPO_ACTI: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    DE_TIPO_ACTI: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TTTIPO_ACTI',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_TipoActividad",
        unique: true,
        fields: [
          { name: "ID_TIPO_ACTI" },
        ]
      },
    ]
  });
};
