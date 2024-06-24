const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TTTIPO_VARI', {
    ID_TIPO_VARI: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    DE_TIPO_VARI: {
      type: DataTypes.STRING(125),
      allowNull: false
    },
    MO_VARI: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TTTIPO_VARI',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_TipoVar",
        unique: true,
        fields: [
          { name: "ID_TIPO_VARI" },
        ]
      },
    ]
  });
};
