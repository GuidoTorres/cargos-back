const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MP_USUARIO', {
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    USUARIO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MP_USUARIO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MP_USUARIO",
        unique: true,
        fields: [
          { name: "CENTRO_COSTO" },
          { name: "USUARIO" },
        ]
      },
    ]
  });
};
