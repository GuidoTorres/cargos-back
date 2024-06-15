const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Programa', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Programa_Nombre',
        key: 'programa'
      }
    },
    funcion: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Funcion',
        key: 'funcion'
      }
    },
    programa: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Programa_Nombre',
        key: 'programa'
      }
    }
  }, {
    sequelize,
    tableName: 'Programa',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PROGRAMA_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "programa" },
        ]
      },
      {
        name: "PK_PROGRAMA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "funcion" },
          { name: "programa" },
        ]
      },
    ]
  });
};
