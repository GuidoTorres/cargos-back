const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('codigo_general', {
    codigo: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'codigo_general',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_codigo_general",
        unique: true,
        fields: [
          { name: "codigo" },
        ]
      },
    ]
  });
};
