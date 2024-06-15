const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONCEPTO_GASTO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'operacion',
        key: 'operacion'
      }
    },
    CONCEPTO_GASTO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONCEPTO_MAESTRO',
        key: 'CONCEPTO_GASTO'
      }
    },
    CICLO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TIPO_OPERACION: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TIPO_ACT_PROY: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    NRO_PLANTILLA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    OPERACION: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      references: {
        model: 'operacion',
        key: 'operacion'
      }
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'SIG_CLASIFICADOR_GASTO',
        key: 'CLASIFICADOR'
      }
    },
    MAYOR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    SUB_CTA_DET: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FLAG_IGV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_DOC: {
      type: DataTypes.STRING(3),
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
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ACTIVO_FIJO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_MODULO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_PED_CN: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CONCEPTO_GASTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_CONC_GASTO_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "CONCEPTO_GASTO" },
        ]
      },
      {
        name: "IND_CONC_GASTO_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "OPERACION" },
        ]
      },
      {
        name: "IND_CONC_GASTO_03",
        fields: [
          { name: "ANO_EJE" },
          { name: "CLASIFICADOR" },
        ]
      },
      {
        name: "PK_SIG_CONCEPTO_GASTO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "CONCEPTO_GASTO" },
          { name: "CICLO" },
          { name: "TIPO_OPERACION" },
          { name: "TIPO_USO" },
          { name: "TIPO_ACT_PROY" },
          { name: "NRO_PLANTILLA" },
        ]
      },
    ]
  });
};
