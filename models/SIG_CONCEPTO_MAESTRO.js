const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONCEPTO_MAESTRO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    CONCEPTO_GASTO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ABREVIATURA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_CONCEPTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ACTIVO_FIJO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ELEMENTO_GASTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ALCANCE: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CONCEPTO_MAESTRO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CONCEPTO_MAESTRO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "CONCEPTO_GASTO" },
        ]
      },
    ]
  });
};
