const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sector', {
    sector: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sector',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_SECTOR",
        unique: true,
        fields: [
          { name: "sector" },
        ]
      },
      {
        name: "pk_sector",
        unique: true,
        fields: [
          { name: "sector" },
        ]
      },
    ]
  });
};
