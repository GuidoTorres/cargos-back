const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CATEGORIA_OCUPACIONAL', {
    grupo_ocupacional: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    categoria_ocupacional: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_CATEGORIA_OCUPACIONAL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CATEGORIA_OCUPACIONAL",
        unique: true,
        fields: [
          { name: "grupo_ocupacional" },
          { name: "categoria_ocupacional" },
        ]
      },
    ]
  });
};
