const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TIPO_UNIDAD_ACTIVO', {
    CODIGO_TIPO_UA: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    IND_TERRENO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TIPO_UNIDAD_ACTIVO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TIPO_UNIDAD_ACTIVO",
        unique: true,
        fields: [
          { name: "CODIGO_TIPO_UA" },
        ]
      },
    ]
  });
};
