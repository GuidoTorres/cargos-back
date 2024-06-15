const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('LOG_TIPOS_TRANSMISIONES', {
    TIPO_ENVIO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TRANSACCIONES: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCIONES: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    VECES: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    },
    FRECUENCIA: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'LOG_TIPOS_TRANSMISIONES',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_LOG_TIPOS_TRANSMISIONES",
        unique: true,
        fields: [
          { name: "TIPO_ENVIO" },
          { name: "TRANSACCIONES" },
        ]
      },
    ]
  });
};
