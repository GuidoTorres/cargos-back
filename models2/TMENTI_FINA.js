const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMENTI_FINA', {
    ID_ENTI_FINA: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DE_ENTI_FINA: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMENTI_FINA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_EntidadFinanciera",
        unique: true,
        fields: [
          { name: "ID_ENTI_FINA" },
        ]
      },
    ]
  });
};
