const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pliego', {
    sector: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sector',
        key: 'sector'
      }
    },
    pliego: {
      type: DataTypes.STRING(3),
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
    tableName: 'pliego',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_PLIEGO",
        unique: true,
        fields: [
          { name: "sector" },
          { name: "pliego" },
        ]
      },
      {
        name: "ind_pliego_01",
        fields: [
          { name: "sector" },
        ]
      },
      {
        name: "pk_pliego",
        unique: true,
        fields: [
          { name: "sector" },
          { name: "pliego" },
        ]
      },
    ]
  });
};
