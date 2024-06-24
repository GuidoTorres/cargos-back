const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TTTIPO_MODA_FORM', {
    ID_TIPO_MODA_FORM: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DE_TIPO_MODA_FORM: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TTTIPO_MODA_FORM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_TipoModalidadFormativa",
        unique: true,
        fields: [
          { name: "ID_TIPO_MODA_FORM" },
        ]
      },
    ]
  });
};
