const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TIPO_MODALIDAD', {
    COD_MODALIDAD: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    FLAG_TIPO_UA: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_TIPO_MODALIDAD',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TIPO_MODALIDAD",
        unique: true,
        fields: [
          { name: "COD_MODALIDAD" },
        ]
      },
    ]
  });
};
