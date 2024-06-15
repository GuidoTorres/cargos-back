const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MP_UBICACION', {
    TIPO_UBICA: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    COD_UBICA: {
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
    tableName: 'MP_UBICACION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MP_UBICACION",
        unique: true,
        fields: [
          { name: "TIPO_UBICA" },
          { name: "COD_UBICA" },
        ]
      },
    ]
  });
};
