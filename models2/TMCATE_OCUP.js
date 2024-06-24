const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMCATE_OCUP', {
    ID_CATE_OCUP: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    DE_CATE_OCUP: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMCATE_OCUP',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_CategoriaOcupacional",
        unique: true,
        fields: [
          { name: "ID_CATE_OCUP" },
        ]
      },
    ]
  });
};
