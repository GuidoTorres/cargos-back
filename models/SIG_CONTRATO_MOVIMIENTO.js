const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONTRATO_MOVIMIENTO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATOS',
        key: 'TIPO_CONTRATO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATOS',
        key: 'TIPO_CONTRATO'
      }
    },
    TIPO_CONTRATO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATOS',
        key: 'TIPO_CONTRATO'
      }
    },
    NRO_CONTRATO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATOS',
        key: 'TIPO_CONTRATO'
      }
    },
    SEC_MOVIMIENTO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_MOVIMIENTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_PAGO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NRO_ADDENDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    NRO_DOCUMENTO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OBSERVACION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FECHA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PORCENTAJE: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: true,
      defaultValue:" CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue:" CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    FECHA_ACTUALIZA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    INTERFASE_SIAF: {
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
    CANT_PERIODO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha_inicial: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_final: {
      type: DataTypes.DATE,
      allowNull: true
    },
    motivo_cese: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    fecha_cese: {
      type: DataTypes.DATE,
      allowNull: true
    },
    flag_impresion: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    fecha_ini_arre: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_fin_arre: {
      type: DataTypes.DATE,
      allowNull: true
    },
    monto_arre: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    NRO_MESES_PRO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      defaultValue: 0
    },
    NRO_DIAS_PRO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true,
      defaultValue: 0
    },
    IND_CONTRATO_VERSION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_CAMBIO_MODIF: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CONTRATO_MOVIMIENTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CONTRATO_MOVIMIENTO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONTRATO" },
          { name: "NRO_CONTRATO" },
          { name: "SEC_MOVIMIENTO" },
        ]
      },
    ]
  });
};
