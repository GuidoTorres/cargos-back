const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Persona', {
    tipo_id: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    ruc: {
      type: DataTypes.STRING(11),
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    TIPO_SERVICIO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FECHA_ESTADO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MONTO_CONTRATADO: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    MONTO_TOPE: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    ruc_old: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_ENVIO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    COD_ERROR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    COD_MENSA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ARCHIVO: {
      type: DataTypes.STRING(40),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Persona',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PERSONA",
        unique: true,
        fields: [
          { name: "tipo_id" },
          { name: "ruc" },
        ]
      },
    ]
  });
};
