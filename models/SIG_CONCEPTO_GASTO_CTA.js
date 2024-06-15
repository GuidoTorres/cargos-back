const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONCEPTO_GASTO_CTA', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONCEPTO_GASTO',
        key: 'TIPO_USO'
      }
    },
    CONCEPTO_GASTO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONCEPTO_GASTO',
        key: 'TIPO_USO'
      }
    },
    CICLO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONCEPTO_GASTO',
        key: 'TIPO_USO'
      }
    },
    TIPO_OPERACION: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONCEPTO_GASTO',
        key: 'TIPO_USO'
      }
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONCEPTO_GASTO',
        key: 'TIPO_USO'
      }
    },
    TIPO_ACT_PROY: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONCEPTO_GASTO',
        key: 'TIPO_USO'
      }
    },
    NRO_PLANTILLA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONCEPTO_GASTO',
        key: 'TIPO_USO'
      }
    },
    FASE: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    MAYOR_DEBE: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    SUB_CTA_DEBE: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    MAYOR_HABER: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    SUB_CTA_HABER: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
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
    tableName: 'SIG_CONCEPTO_GASTO_CTA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_CONC_GASTO_CTA_01",
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
      {
        name: "PK_SIG_CONCEPTO_GASTO_CTA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "CONCEPTO_GASTO" },
          { name: "CICLO" },
          { name: "TIPO_OPERACION" },
          { name: "TIPO_USO" },
          { name: "TIPO_ACT_PROY" },
          { name: "NRO_PLANTILLA" },
          { name: "FASE" },
          { name: "MAYOR_DEBE" },
          { name: "SUB_CTA_DEBE" },
          { name: "MAYOR_HABER" },
          { name: "SUB_CTA_HABER" },
        ]
      },
    ]
  });
};
