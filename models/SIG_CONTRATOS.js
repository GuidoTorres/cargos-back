const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONTRATOS', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_CONSOLIDADO',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_CONSOLIDADO',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_CONTRATO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    NRO_CONTRATO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_CONTRATO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    TIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      references: {
        model: 'SIG_PAAC_CONSOLIDADO',
        key: 'TIPO_GENERACION'
      }
    },
    PROCESO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      references: {
        model: 'SIG_CONVOCATORIA_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true,
      references: {
        model: 'SIG_CONVOCATORIA_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    CONVOCATORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'SIG_CONVOCATORIA_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_CONVOCATORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'SIG_CONVOCATORIA_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_PROVEEDOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      references: {
        model: 'SIG_CONTRATISTAS',
        key: 'PROVEEDOR'
      }
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DOC_SIAF: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FECHA_INICIAL: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_FINAL: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    MONEDA_PAGO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true,
      defaultValue:" CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    NRO_DOCUMENTO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OBJETO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESPEC_TECNICAS: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    GLOSA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TIPO_COMPRA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MODAL_COMPRA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FLAG_ADDENDA: {
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
    tipo_proceso: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    NRO_ENCARGO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    SEC_EJEC2: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FLAG_TESORO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SEC_CONVENIO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    ID_PROCESO: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ID_CONTRATO: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FLAG_SNP: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    MONTO_SUELDO_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_SUELDO_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    FECHA_CESE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_SUSP_IR: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    MES_SUSP_INI: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MES_SUSP_FIN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MOTIVO_CESE: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    empleado: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    nro_meses: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    ANO_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NRO_PROCESO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    SIGLAS: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    TIPO_ORGANISMO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    nro_addenda: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    fecha_ini_adenda: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_fin_adenda: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    flag_impresion: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG_EXTERNO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_PSA: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    TIPO_CONSOLID: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      references: {
        model: 'SIG_PAAC_CONSOLIDADO',
        key: 'TIPO_GENERACION'
      }
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      references: {
        model: 'SIG_PAAC_CONSOLIDADO',
        key: 'TIPO_GENERACION'
      }
    },
    FLAG_PROCEDENCIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    TIPO_COMPROMISO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_CERTIFICA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ESTADO_ANULADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_MOD_MONTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CENTRO_COSTO_RESP: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ANO_EJE_RESP: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    FLAG_CTO_COMPLEMENTARIO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_DOCUMENTO_ORIGINAL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NRO_PROCESO_RELACIONADO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ANO_EJE_ORIG: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    SEC_EJEC_ORIG: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    TIPO_CONTRATO_ORIG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_CONTRATO_ORIG: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    FLAG_CONTR_OT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    REG_ESPECIAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SEC_EJEC_EXT: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    EMPLEADO_EJECUCION: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EMPLEADO_OPERADOR: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FLAG_SEG_VENCIMIENTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_SEG_EJECUCION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CEAM_OCE_ID: {
      type: DataTypes.CHAR(10),
      allowNull: true
    },
    CEAM_OCE: {
      type: DataTypes.CHAR(12),
      allowNull: true
    },
    MONTO_ID: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    FLAG_PROC_ELECTORAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_PROC_ELEC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_PROC_ELEC: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NRO_MESES_ALQ: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      defaultValue: 0
    },
    NRO_DIAS_ALQ: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true,
      defaultValue: 0
    },
    IND_CONTRATO_VERSION: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CONTRATOS',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "IND_CONTRATO_03",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONSOLID" },
          { name: "NRO_CONSOLID" },
          { name: "TIPO_GENERACION" },
        ]
      },
      {
        name: "IND_SIG_CONTRATOS_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_GENERACION" },
          { name: "PROCESO" },
          { name: "SEC_PROCESO" },
          { name: "CONVOCATORIA" },
          { name: "SEC_CONVOCATORIA" },
        ]
      },
      {
        name: "IND_SIG_CONTRATOS_02",
        fields: [
          { name: "PROVEEDOR" },
        ]
      },
      {
        name: "IND_SIG_CONTRATOS_04",
        fields: [
          { name: "ANO_EJE_ORIG" },
          { name: "SEC_EJEC_ORIG" },
          { name: "TIPO_CONTRATO_ORIG" },
          { name: "NRO_CONTRATO_ORIG" },
        ]
      },
      {
        name: "PK_SIG_CONTRATOS",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONTRATO" },
          { name: "NRO_CONTRATO" },
        ]
      },
    ]
  });
};
