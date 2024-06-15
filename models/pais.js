const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pais', {
    pais: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'pais',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_PAIS",
        unique: true,
        fields: [
          { name: "pais" },
        ]
      },
      {
        name: "pk_pais",
        unique: true,
        fields: [
          { name: "pais" },
        ]
      },
    ]
  });
};
