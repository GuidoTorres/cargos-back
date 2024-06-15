const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONTRATO_ITEM_MENSUAL', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM',
        key: 'TIPO_CONTRATO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM',
        key: 'TIPO_CONTRATO'
      }
    },
    TIPO_CONTRATO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM',
        key: 'TIPO_CONTRATO'
      }
    },
    NRO_CONTRATO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM',
        key: 'TIPO_CONTRATO'
      }
    },
    NRO_ITEM: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM',
        key: 'TIPO_CONTRATO'
      }
    },
    SEC_PERIODO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    ANO_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MES_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FECHA_PAGO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ANO_ORIGEN: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MES_ORIGEN: {
      type: DataTypes.STRING(2),
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
    FLAG_PROCESO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SEC_CUADRO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    SEC_MOVIMIENTO: {
      type: DataTypes.DECIMAL(2,0),
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
    FLAG_ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VALOR_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    },
    PRECIO_MONEDA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    FECHA_PAGO_ANUL: {
      type: DataTypes.DATE,
      allowNull: true
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
    FECHA_INI_RETENCION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_FIN_RETENCION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VALOR_MONEDA_RETENCION: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    OBSERVACION_RETENCION: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CONTRATO_ITEM_MENSUAL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CONTRATO_ITEM_MENSUAL",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONTRATO" },
          { name: "NRO_CONTRATO" },
          { name: "NRO_ITEM" },
          { name: "SEC_PERIODO" },
        ]
      },
    ]
  });
};
