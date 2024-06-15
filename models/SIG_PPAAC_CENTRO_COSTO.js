const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPAAC_CENTRO_COSTO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPAAC_METAS',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPAAC_METAS',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_CONSOLID: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPAAC_METAS',
        key: 'TIPO_GENERACION'
      }
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPAAC_METAS',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_GENERACION: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPAAC_METAS',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPAAC_METAS',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_CONSOLID: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPAAC_METAS',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_RESUMEN: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPAAC_METAS',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_META: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPAAC_METAS',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_CTRO_COSTO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    TIPO_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NIVEL_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CODIGO_TAREA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    TIPO_USO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    MES_01: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_02: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_03: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_04: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_05: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_06: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_07: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_08: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_09: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_10: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_11: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_12: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: 0
    },
    VALOR: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    TIPO_IMPTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TASA_IMPTO: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true,
      defaultValue: 0
    },
    FTE_FTO_IMPTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    VALOR_IMPTO: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    VALOR_IMPTO_MONEDA: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
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
    VALOR_CMN: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    MES_PROGR_01: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_PROGR_02: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_PROGR_03: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_PROGR_04: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_PROGR_05: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_PROGR_06: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_PROGR_07: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_PROGR_08: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_PROGR_09: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_PROGR_10: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_PROGR_11: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_PROGR_12: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    CANTIDAD_PROGR: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    VALOR_PROGR: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    FLAG_MES_01: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "1"
    },
    FLAG_MES_02: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "1"
    },
    FLAG_MES_03: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "1"
    },
    FLAG_MES_04: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "1"
    },
    FLAG_MES_05: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "1"
    },
    FLAG_MES_06: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "1"
    },
    FLAG_MES_07: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "1"
    },
    FLAG_MES_08: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "1"
    },
    FLAG_MES_09: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "1"
    },
    FLAG_MES_10: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "1"
    },
    FLAG_MES_11: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "1"
    },
    FLAG_MES_12: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "1"
    }
  }, {
    sequelize,
    tableName: 'SIG_PPAAC_CENTRO_COSTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_PPAAC_CCOSTO_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_TAREA" },
          { name: "CODIGO_TAREA" },
          { name: "NIVEL_TAREA" },
          { name: "CENTRO_COSTO" },
        ]
      },
      {
        name: "IND_SIG_PPAAC_CCOSTO_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
        ]
      },
      {
        name: "IND_SIG_PPAAC_CCOSTO_03",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONSOLID" },
          { name: "NRO_CONSOLID" },
          { name: "TIPO_BIEN" },
          { name: "SEC_CONSOLID" },
          { name: "SEC_RESUMEN" },
          { name: "SEC_META" },
          { name: "TIPO_GENERACION" },
        ]
      },
      {
        name: "PK_SIG_PPAAC_CCOSTO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONSOLID" },
          { name: "NRO_CONSOLID" },
          { name: "TIPO_GENERACION" },
          { name: "TIPO_BIEN" },
          { name: "SEC_CONSOLID" },
          { name: "SEC_RESUMEN" },
          { name: "SEC_META" },
          { name: "SEC_CTRO_COSTO" },
        ]
      },
    ]
  });
};
