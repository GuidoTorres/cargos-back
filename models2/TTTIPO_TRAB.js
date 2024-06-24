const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TTTIPO_TRAB', {
    ID_TIPO_TRAB: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DE_TIPO_TRAB: {
      type: DataTypes.STRING(75),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TTTIPO_TRAB',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_TipoTrabajador",
        unique: true,
        fields: [
          { name: "ID_TIPO_TRAB" },
        ]
      },
    ]
  });
};
