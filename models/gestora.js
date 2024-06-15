const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gestora', {
    sector: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pliego',
        key: 'sector'
      }
    },
    pliego: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pliego',
        key: 'sector'
      }
    },
    gestora: {
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
    tableName: 'gestora',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ind_gestora_01",
        fields: [
          { name: "sector" },
          { name: "pliego" },
        ]
      },
      {
        name: "IND_PK_GESTORA",
        unique: true,
        fields: [
          { name: "sector" },
          { name: "pliego" },
          { name: "gestora" },
        ]
      },
      {
        name: "pk_gestora",
        unique: true,
        fields: [
          { name: "sector" },
          { name: "pliego" },
          { name: "gestora" },
        ]
      },
    ]
  });
};
