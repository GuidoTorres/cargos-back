const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MOVIM_ALMACEN', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DESTINOS',
        key: 'SEC_EJEC'
      }
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ALMACEN',
        key: 'sec_ejec'
      }
    },
    SEC_ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ALMACEN',
        key: 'sec_ejec'
      }
    },
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TIPO_MOVIMIENTO',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TIPO_MOVIMIENTO',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_DESTINO: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'SIG_DESTINOS',
        key: 'SEC_EJEC'
      }
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    NRO_ENCARGO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    SEC_EJEC2: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ANO_ORDEN: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    PROC_GUIA: {
      type: DataTypes.STRING(2),
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
    FECHA_ENTRADA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OBSERVACION: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NRO_FACTURA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHA_FACTURA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    INDI_CONFOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_MOVIMTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_DOCUMTO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NRO_GUIA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ESTADO_KARDEX: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NOMBRE_PROVEEDOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ESTADO_ACTIVO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_DEVENG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MES_MOVIMTO: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    TIPO_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      references: {
        model: 'sig_centro_costo_tarea',
        key: 'tipo_tarea'
      }
    },
    NIVEL_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      references: {
        model: 'sig_centro_costo_tarea',
        key: 'tipo_tarea'
      }
    },
    CODIGO_TAREA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      references: {
        model: 'sig_centro_costo_tarea',
        key: 'tipo_tarea'
      }
    },
    EXPEDIENTE_SIAF: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    SECUENCIA_SIAF: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    TIPO_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NRO_MOVIM_ACTIVO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FLAG_ACTIVO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_N\r\n\tAS N"
    },
    TIPO_ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    RESPONSABLE: {
      type: DataTypes.STRING(15),
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
    SEC_ENCARGO_REQ: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FLAG_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_ESTRATEGICO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_DESTINO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CODIGO_DESTINO_PED: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CENTRO_COSTO_PED: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SEC_EJEC_PED: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    ESTADO_RECEPCION: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SEC_EJEC_TRAN: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    DOCUM_CONFIRMA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHA_CONFIRMA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RESPO_CONFIRMA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    GLOSA: {
      type: DataTypes.STRING(300),
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
    FLAG_IMP_ARC: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    TIPO_PERSONA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_DOC_APROB: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DESC_DOC_APROB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TIPO_DOCUMENTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NRO_DOCUMENTO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_PENALIDAD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_REQUERIM: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_MOVIM_ALMACEN',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_MOVIM_ALM_02",
        fields: [
          { name: "SEC_EJEC" },
          { name: "ALMACEN" },
          { name: "SEC_ALMACEN" },
        ]
      },
      {
        name: "IND_SIG_MOVIM_ALM_03",
        fields: [
          { name: "PROVEEDOR" },
        ]
      },
      {
        name: "IND_SIG_MOVIM_ALM_04",
        fields: [
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
        ]
      },
      {
        name: "IND_SIG_MOVIM_ALM_05",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "TIPO_TAREA" },
          { name: "NIVEL_TAREA" },
          { name: "CODIGO_TAREA" },
        ]
      },
      {
        name: "IND_SIG_MOVIM_ALM_06",
        fields: [
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
        ]
      },
      {
        name: "IND_SIG_MOVIM_ALM_07",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_ENCARGO" },
        ]
      },
      {
        name: "IND_SIG_MOVIM_ALM_08",
        fields: [
          { name: "SEC_EJEC" },
          { name: "CODIGO_DESTINO" },
        ]
      },
      {
        name: "IND_SIG_MOVIM_ALM_10",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "MES_MOVIMTO" },
          { name: "TIPO_MOVIMTO" },
          { name: "NRO_MOVIM_ACTIVO" },
          { name: "TIPO_TRANSAC" },
          { name: "TIPO_PPTO" },
        ]
      },
      {
        name: "IND_SIG_MOVIM_ALM_20",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "MES_MOVIMTO" },
          { name: "TIPO_MOVIMTO" },
          { name: "NRO_MOVIM_ACTIVO" },
        ]
      },
      {
        name: "PK_SIG_MOVIM_ALMACEN",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "ALMACEN" },
          { name: "SEC_ALMACEN" },
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
          { name: "TIPO_PPTO" },
          { name: "NRO_MOVIMTO" },
        ]
      },
    ]
  });
};
