const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONTRATO_ITEM_MENS_PPTAL', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM_MENSUAL',
        key: 'TIPO_CONTRATO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM_MENSUAL',
        key: 'TIPO_CONTRATO'
      }
    },
    TIPO_CONTRATO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM_MENSUAL',
        key: 'TIPO_CONTRATO'
      }
    },
    NRO_CONTRATO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM_MENSUAL',
        key: 'TIPO_CONTRATO'
      }
    },
    NRO_ITEM: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM_MENSUAL',
        key: 'TIPO_CONTRATO'
      }
    },
    SEC_PERIODO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM_MENSUAL',
        key: 'TIPO_CONTRATO'
      }
    },
    SEC_PPTO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
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
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_ADELANTO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
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
    TIPO_IMPTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TASA_IMPTO: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    FTE_FTO_IMPTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    VALOR_IMPTO_MONEDA: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_IMPTO_ADELANTO: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_USO_ORIG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EXPEDIENTE: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    SEC_EJEC2: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    VALOR_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_IMPTO_SOLES: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CANTIDAD_ANUL: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    VALOR_MONEDA_ANUL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_SOLES_ANUL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_ADELANTO_ANUL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_IMPTO_MONEDA_ANUL: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    VALOR_IMPTO_SOLES_ANUL: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    VALOR_IMPTO_ADELANTO_ANUL: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CONTRATO_ITEM_MENS_PPTAL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_CONT_ITEM_MEN_PP_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
        ]
      },
      {
        name: "IND_SIG_CONT_ITEM_MEN_PP_03",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_FUNC" },
        ]
      },
      {
        name: "IND_SIG_CONT_ITEM_MEN_PP_04",
        fields: [
          { name: "ANO_EJE" },
          { name: "CLASIFICADOR" },
        ]
      },
      {
        name: "PK_SIG_CONTRATO_ITEM_MENS_PPTAL",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONTRATO" },
          { name: "NRO_CONTRATO" },
          { name: "NRO_ITEM" },
          { name: "SEC_PERIODO" },
          { name: "SEC_PPTO" },
        ]
      },
    ]
  });
};
