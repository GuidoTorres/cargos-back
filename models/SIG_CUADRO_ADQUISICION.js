const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CUADRO_ADQUISICION', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_personal',
        key: 'sec_ejec'
      }
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    SEC_CUADRO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_ENCARGO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    SEC_EJEC2: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FLAG_ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'sig_personal',
        key: 'sec_ejec'
      }
    },
    TIPO_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DOCUMENTO: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    FECHA_CUADRO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    NIVEL_AUTORIZ: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FECHA_AUTORIZ: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_CALEND: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    MES_CALEND: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    FECHA_COMPRA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    FLAG_PROCESO: {
      type: DataTypes.CHAR(1),
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
    TIPO_OPERACION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ANO_CONTRATO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NRO_CONTRATO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    NRO_PROC_SEL: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    ANO_REQUER: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NRO_REQUER: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    NRO_CUADRO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FECHA_NRO_CUADRO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_CONS_PAAC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    VALOR_TOTAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    FLAG_PEDIDO: {
      type: DataTypes.CHAR(1),
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
    tipo_organismo: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    INDICADOR_NUEVO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    tarea_encargo: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_TESORO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    tipo_tarea: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    nivel_tarea: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    tarea_general: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ANO_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    TIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    PROCESO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    SEC_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    CONVOCATORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    SEC_CONVOCATORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    SIGLAS: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    ANO_PROC_SEL: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NRO_GRUPO_CUADRO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FLAG_EXPEDIENTE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fecha_pedido: {
      type: DataTypes.DATE,
      allowNull: true
    },
    tipo_entidad: {
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
    FLAG_PSA: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    MODALIDAD_JUSTIFICA: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    FLAG_PASAJE: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    TIPO_AFECTACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_PROYECTADO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    SEC_CUADRO_PROY: {
      type: DataTypes.DECIMAL(6,0),
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
    }
  }, {
    sequelize,
    tableName: 'SIG_CUADRO_ADQUISICION',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_CUADRO_ADQUISICION_03",
        fields: [
          { name: "SEC_EJEC" },
          { name: "EMPLEADO" },
        ]
      },
      {
        name: "IND_SIG_CUADRO_ADQUISICION_04",
        fields: [
          { name: "PROVEEDOR" },
        ]
      },
      {
        name: "IND_SIG_CUADRO_ADQUISICION_05",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_ENCARGO" },
        ]
      },
      {
        name: "IND_SIG_CUADRO_ADQUISICION_06",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PPTO" },
        ]
      },
      {
        name: "PK_CUADRO_ADQUISICION",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "SEC_CUADRO" },
        ]
      },
    ]
  });
};
