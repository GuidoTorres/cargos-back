const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMCATE', {
    ID_CATE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    DE_CATE: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMCATE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Categorias",
        unique: true,
        fields: [
          { name: "ID_CATE" },
        ]
      },
    ]
  });
};
