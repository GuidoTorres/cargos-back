const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMFUEN', {
    ID_FUEN: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    DE_FUEN_ABRE: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    DE_FUEN: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMFUEN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TBFuente",
        unique: true,
        fields: [
          { name: "ID_FUEN" },
        ]
      },
    ]
  });
};
