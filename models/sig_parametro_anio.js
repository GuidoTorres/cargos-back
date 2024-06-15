const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_parametro_anio', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    parametro: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    valor: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_parametro_anio',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PARAMETRO_ANIO",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "parametro" },
        ]
      },
    ]
  });
};
