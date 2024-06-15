const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TIPO_CONSTRUC_INM', {
    COD_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    COD_TIPO_CONSTRUC: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_TIPO_INM: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_TIPO_UA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    COD_MODALIDAD_UA: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TIPO_CONSTRUC_INM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TIPO_CONSTRUC_INM",
        unique: true,
        fields: [
          { name: "COD_MODALIDAD" },
          { name: "COD_TIPO_CONSTRUC" },
          { name: "CODIGO_TIPO_INM" },
        ]
      },
    ]
  });
};
