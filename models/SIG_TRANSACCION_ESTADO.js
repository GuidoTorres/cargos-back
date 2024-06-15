const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TRANSACCION_ESTADO', {
    COD_MAESTRO: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    COD_DETALLE: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    ESTADO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TRANSACCION_ESTADO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_S_TR_ES_01",
        unique: true,
        fields: [
          { name: "COD_MAESTRO" },
          { name: "COD_DETALLE" },
          { name: "ESTADO" },
        ]
      },
    ]
  });
};
