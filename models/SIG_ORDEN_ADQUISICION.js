const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ORDEN_ADQUISICION', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CERTIFICACION',
        key: 'SEC_EJEC'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CERTIFICACION',
        key: 'SEC_EJEC'
      }
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
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
    ANO_CUADRO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    SEC_CUADRO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
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
    MES_CALEND: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FECHA_ORDEN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ANO_CONTRATO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    SEC_CONTRATO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    NRO_CONTRATO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHA_CONTRATO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DOCUMENTO_SIAF: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PLAZO_ENTREGA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    TIPO_GARANTIA: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    CONDICION_PAGO: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    DOCUM_REFERENCIA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    },
    RESUMEN_COMPRA: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CONCEPTO: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    FECHA_CANCEL: {
      type: DataTypes.DATE,
      allowNull: true
    },
    INCL_IGV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    INCL_RENTA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    INCL_IES: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TASA_IMPTO: {
      type: DataTypes.DECIMAL(9,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    SUBTOTAL_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    TOTAL_IGV_MONEDA: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    TOTAL_FACT_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    SUBTOTAL_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    TOTAL_IGV_SOLES: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    TOTAL_FACT_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IES_MONEDA: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    IES_SOLES: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    RENTA_MONEDA: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    RENTA_SOLES: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    SEC_ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FLAG_ALMACEN: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ESTADO_SIAF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_SIAF: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_OPERACION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_PAGO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_RECURSO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_COMPROMISO: {
      type: DataTypes.STRING(2),
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
    PROYECTO: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    CUENTA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPO_ORGANISMO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ORGANISMO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CONVENIO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    EXP_SIAF: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    NRO_PROC_SEL: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FLAG_RECEPCION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_RECEPCION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_ANULACION_SIAF: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SUBTOTAL_VENTA_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    SUBTOTAL_EXO_IMPTO_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    SUBTOTAL_VENTA_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    SUBTOTAL_EXO_IMPTO_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    FLAG_TESORO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_ENTIDAD: {
      type: DataTypes.CHAR(1),
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
    ID_ORDEN: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FLAG_IMPRIME_ASC: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    GLOSA: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FLAG_IMPRIME_DET_TOTAL: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG_PSA: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    MODALIDAD_JUSTIFICA: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    EXP_SIGA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    EXP_SIGA_DOC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    TIPO_AFECTACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    intf_cer: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    intf_cerse: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    intf_cerco: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    NRO_CERTIFICA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      references: {
        model: 'SIG_CERTIFICACION',
        key: 'SEC_EJEC'
      }
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
    sec_ejec_siaf: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FLAG_NEA_EMERGENCIA: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'SIG_ORDEN_ADQUISICION',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_ORDEN_ADQ_01",
        fields: [
          { name: "SEC_EJEC" },
        ]
      },
      {
        name: "IND_SIG_ORDEN_ADQ_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_ENCARGO" },
        ]
      },
      {
        name: "IND_SIG_ORDEN_ADQ_03",
        fields: [
          { name: "PROVEEDOR" },
        ]
      },
      {
        name: "IND_SIG_ORDEN_ADQ_04",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PPTO" },
          { name: "SEC_CUADRO" },
        ]
      },
      {
        name: "PK_SIG_ORDEN_ADQUISICION",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_ORDEN" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PPTO" },
        ]
      },
    ]
  });
};
