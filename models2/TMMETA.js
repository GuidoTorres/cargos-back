const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMMETA', {
    ID_META: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    DE_META: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMMETA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Metas",
        unique: true,
        fields: [
          { name: "ID_META" },
        ]
      },
    ]
  });
};
