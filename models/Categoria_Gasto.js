const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Categoria_Gasto', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    categ_gasto: {
      type: DataTypes.STRING(1),
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
    tableName: 'Categoria_Gasto',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CATEGORIA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "categ_gasto" },
        ]
      },
    ]
  });
};
