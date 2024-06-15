const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONCEPTO_FAMILIA', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONCEPTO_GASTO',
        key: 'TIPO_USO'
      }
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'familia_bien_serv',
        key: 'tipo_bien'
      }
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'familia_bien_serv',
        key: 'tipo_bien'
      }
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'familia_bien_serv',
        key: 'tipo_bien'
      }
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'familia_bien_serv',
        key: 'tipo_bien'
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
    INDICADOR: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
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
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IND_USER_MODIF: {
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
    tableName: 'SIG_CONCEPTO_FAMILIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_CONC_FAMILIA_01",
        fields: [
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
        ]
      },
      {
        name: "IND_CONC_FAMILIA_02",
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
        name: "IND_CONC_FAMILIA_03",
        fields: [
          { name: "ANO_EJE" },
          { name: "CLASIFICADOR" },
        ]
      },
      {
        name: "PK_SIG_CONCEPTO_FAMILIA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "CONCEPTO_GASTO" },
          { name: "CICLO" },
          { name: "TIPO_OPERACION" },
          { name: "TIPO_USO" },
          { name: "TIPO_ACT_PROY" },
          { name: "NRO_PLANTILLA" },
          { name: "INDICADOR" },
        ]
      },
    ]
  });
};
