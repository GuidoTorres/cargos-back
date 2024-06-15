const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PAAC_METAS', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_METAS',
        key: 'TIPO_GENERACION'
      }
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_METAS',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_CONSOLID: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_METAS',
        key: 'TIPO_GENERACION'
      }
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_METAS',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_METAS',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_METAS',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_CONSOLID: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_METAS',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_RESUMEN: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_METAS',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_META: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_METAS',
        key: 'TIPO_GENERACION'
      }
    },
    sec_func: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true,
      references: {
        model: 'meta',
        key: 'sec_func'
      }
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: true,
      references: {
        model: 'Fuente_Financ',
        key: 'ORIGEN'
      }
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'Fuente_Financ',
        key: 'ORIGEN'
      }
    },
    TIPO_RECURSO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'SIG_CLASIFICADOR_GASTO',
        key: 'CLASIFICADOR'
      }
    },
    MES_01: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MES_02: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MES_03: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MES_04: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MES_05: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MES_06: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MES_07: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MES_08: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MES_09: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MES_10: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MES_11: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MES_12: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    TIPO_IMPTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FTE_FTO_IMPTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TASA_IMPTO: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true
    },
    VALOR_IMPTO: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    },
    VALOR_IMPTO_MONEDA: {
      type: DataTypes.DECIMAL(20,2),
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
    SEC_EJEC2: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    ROL_ENCARGO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NRO_CONVENIO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FLAG_TESORO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    EXPEDIENTE: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    SEC_FUNC_ENCARGO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    TIPO_ENTIDAD: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    origen_ppr: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    meta_fisica: {
      type: DataTypes.DECIMAL(20,3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PAAC_METAS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_PAAC_METAS_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
        ]
      },
      {
        name: "IND_SIG_PAAC_METAS_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "CLASIFICADOR" },
        ]
      },
      {
        name: "IND_SIG_PAAC_METAS_03",
        fields: [
          { name: "ANO_EJE" },
          { name: "sec_ejec" },
          { name: "TIPO_CONSOLID" },
          { name: "NRO_CONSOLID" },
          { name: "TIPO_BIEN" },
          { name: "SEC_CONSOLID" },
          { name: "SEC_RESUMEN" },
          { name: "TIPO_GENERACION" },
        ]
      },
      {
        name: "IND_SIG_PAAC_METAS_05",
        fields: [
          { name: "ANO_EJE" },
          { name: "sec_ejec" },
          { name: "sec_func" },
        ]
      },
      {
        name: "IND_SIG_PAAC_METAS_06",
        fields: [
          { name: "ANO_EJE" },
          { name: "sec_ejec" },
          { name: "sec_func" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
          { name: "CLASIFICADOR" },
        ]
      },
      {
        name: "PK_SIG_PAAC_METAS",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "sec_ejec" },
          { name: "TIPO_CONSOLID" },
          { name: "NRO_CONSOLID" },
          { name: "TIPO_GENERACION" },
          { name: "TIPO_BIEN" },
          { name: "SEC_CONSOLID" },
          { name: "SEC_RESUMEN" },
          { name: "SEC_META" },
        ]
      },
    ]
  });
};
