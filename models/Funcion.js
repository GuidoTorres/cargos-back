const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Funcion', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    funcion: {
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
    tableName: 'Funcion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_FUNCION",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "funcion" },
        ]
      },
    ]
  });
};
