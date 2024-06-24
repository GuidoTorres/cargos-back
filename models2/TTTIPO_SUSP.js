const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TTTIPO_SUSP', {
    ID_TIPO_SUSP: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DE_TIPO_SUSP: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TTTIPO_SUSP',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_TipoSuspension",
        unique: true,
        fields: [
          { name: "ID_TIPO_SUSP" },
        ]
      },
    ]
  });
};
