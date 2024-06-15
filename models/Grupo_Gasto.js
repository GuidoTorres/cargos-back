const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Grupo_Gasto', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Categoria_Gasto',
        key: 'categ_gasto'
      }
    },
    categ_gasto: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Categoria_Gasto',
        key: 'categ_gasto'
      }
    },
    grupo_gasto: {
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
    },
    INCREMENTO: {
      type: DataTypes.DECIMAL(5,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Grupo_Gasto',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GRUPO_GASTO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "categ_gasto" },
          { name: "grupo_gasto" },
        ]
      },
    ]
  });
};
