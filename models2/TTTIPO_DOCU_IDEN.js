const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TTTIPO_DOCU_IDEN', {
    ID_TIPO_DOCU_IDEN: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DE_TIPO_DOCU_IDEN: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TTTIPO_DOCU_IDEN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_TipoDocumentoIdentidad",
        unique: true,
        fields: [
          { name: "ID_TIPO_DOCU_IDEN" },
        ]
      },
    ]
  });
};
