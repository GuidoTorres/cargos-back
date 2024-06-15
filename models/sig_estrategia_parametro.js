const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_estrategia_parametro', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    fase_cuadro: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    programa_institucional: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sig_estrategia_parametro',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_sig_estrategia_parametro",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "fase_cuadro" },
          { name: "programa_institucional" },
        ]
      },
    ]
  });
};
