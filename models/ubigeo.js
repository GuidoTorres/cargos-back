const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ubigeo', {
    pais: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    departamento: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    provincia: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    distrito: {
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
    tableName: 'ubigeo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_UBIGEO",
        unique: true,
        fields: [
          { name: "pais" },
          { name: "departamento" },
          { name: "provincia" },
          { name: "distrito" },
        ]
      },
      {
        name: "pk_ubigeo",
        unique: true,
        fields: [
          { name: "pais" },
          { name: "departamento" },
          { name: "provincia" },
          { name: "distrito" },
        ]
      },
    ]
  });
};
