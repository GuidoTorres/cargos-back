const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMOFIC', {
    ID_OFIC: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true
    },
    DE_OFIC: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMOFIC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Oficinas",
        unique: true,
        fields: [
          { name: "ID_OFIC" },
        ]
      },
    ]
  });
};
