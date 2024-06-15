const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('FUNCION_AMBITO', {
    FUNCION: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    AMBITO: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'FUNCION_AMBITO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_FUNCION_AMBITO",
        unique: true,
        fields: [
          { name: "FUNCION" },
          { name: "AMBITO" },
        ]
      },
    ]
  });
};
