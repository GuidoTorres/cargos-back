const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MAESTRO_EQUIVALENCIA', {
    COD_MAESTRO: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    COD_DETALLE: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    COD_EQUIVALENCIA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPO_EQUIVALENCIA: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'SIG_MAESTRO_EQUIVALENCIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_MAESTRO_EQUIVALENCIA",
        unique: true,
        fields: [
          { name: "COD_MAESTRO" },
          { name: "COD_DETALLE" },
          { name: "TIPO_EQUIVALENCIA" },
        ]
      },
    ]
  });
};
