const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_NIVEL_DESC', {
    FUNCION: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    NIVEL: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    DESC_NIVEL: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_NIVEL_DESC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PPR_NIVEL_DESC",
        unique: true,
        fields: [
          { name: "FUNCION" },
          { name: "NIVEL" },
        ]
      },
    ]
  });
};
