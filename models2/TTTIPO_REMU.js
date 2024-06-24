const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TTTIPO_REMU', {
    ID_TIPO_REMU: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    DE_TIPO_REMU: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TTTIPO_REMU',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_TipoRemuneracion",
        unique: true,
        fields: [
          { name: "ID_TIPO_REMU" },
        ]
      },
    ]
  });
};
