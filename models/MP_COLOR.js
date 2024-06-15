const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MP_COLOR', {
    CODIGO_COLOR: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MP_COLOR',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MP_COLOR",
        unique: true,
        fields: [
          { name: "CODIGO_COLOR" },
        ]
      },
    ]
  });
};
