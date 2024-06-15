const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MAESTRO_ESTADO', {
    cod_maestro: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    cod_detalle: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    abreviatura: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fecha_reg: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_MAESTRO_ESTADO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_MAESTRO_ESTADO",
        unique: true,
        fields: [
          { name: "cod_maestro" },
          { name: "cod_detalle" },
        ]
      },
    ]
  });
};
