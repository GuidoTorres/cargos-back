const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MP_MODELO', {
    CODIGO_BIEN: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true
    },
    MARCA: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    MODELO: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    TIPO_MODALIDAD: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'MP_MODELO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MP_MODELO",
        unique: true,
        fields: [
          { name: "CODIGO_BIEN" },
          { name: "MARCA" },
          { name: "MODELO" },
          { name: "TIPO_MODALIDAD" },
        ]
      },
    ]
  });
};
