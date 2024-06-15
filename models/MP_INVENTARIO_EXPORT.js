const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MP_INVENTARIO_EXPORT', {
    CODIGO_INST: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_BIEN: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    TIPO_UBICA: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    COD_UBICA: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    USUARIO: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    SECUENCIA: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_ACTIVO: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    CODIGO_INTERNO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ESTADO_CONSERV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CONDICION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    MARCA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    MODELO: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    NRO_SERIE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    OBSERVACION: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    MEDIDAS: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CODIGO_COLOR: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NRO_MOTOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ANIO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    PLACA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NRO_CHASIS: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MP_INVENTARIO_EXPORT',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_INV_EXP_01",
        fields: [
          { name: "CODIGO_BIEN" },
          { name: "CENTRO_COSTO" },
          { name: "TIPO_UBICA" },
          { name: "COD_UBICA" },
          { name: "USUARIO" },
        ]
      },
      {
        name: "PK_MP_INVENT_EXPORT",
        unique: true,
        fields: [
          { name: "CODIGO_INST" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
