const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sub_Programa', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Sub_Programa_Nombre',
        key: 'sub_programa'
      }
    },
    funcion: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Programa',
        key: 'programa'
      }
    },
    programa: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Programa',
        key: 'programa'
      }
    },
    sub_programa: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Sub_Programa_Nombre',
        key: 'sub_programa'
      }
    }
  }, {
    sequelize,
    tableName: 'Sub_Programa',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SUB_PROGRAMA_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "sub_programa" },
        ]
      },
      {
        name: "PK_SUB_PROGRAMA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "funcion" },
          { name: "programa" },
          { name: "sub_programa" },
        ]
      },
    ]
  });
};
