const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('operacion', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    operacion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    ciclo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    clasificador: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    mayor: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    sub_cta: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    secuencia: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    tipo_operacion: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    version: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usuario_creador: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    fecha_modificacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    usuario_modificador: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    cta_ord_per: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    caso_esp01: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'operacion',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_OPERACION",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "operacion" },
        ]
      },
      {
        name: "pk_operacion",
        unique: true,
        fields: [
          { name: "ano_eje" },
          { name: "operacion" },
        ]
      },
    ]
  });
};
