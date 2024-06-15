const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MOVIMIENTO_ACTIVO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_personal',
        key: 'sec_ejec'
      }
    },
    MES_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
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
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'SIG_TIPO_MOVIMIENTO',
        key: 'TIPO_TRANSAC'
      }
    },
    NRO_INGRESO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    NRO_SALIDA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FECHA_MOVIMTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OBSERVAC: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    SEDE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    pliego: {
      type: DataTypes.STRING(3),
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
    TIPO_CAUSAL: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'SIG_CAUSAL_BAJA',
        key: 'TIPO_CAUSAL'
      }
    },
    CLASE_CAUSAL: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'SIG_CAUSAL_BAJA',
        key: 'TIPO_CAUSAL'
      }
    },
    TIPO_DOCUMENTO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NRO_DOCUMENTO: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    TIPO_REPARACION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_SALIDA: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'SIG_TIPO_SALIDA',
        key: 'TIPO_SALIDA'
      }
    },
    NRO_DOC_INTERNO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    DESTINO_SALIDA: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    EMPLEADO_RESP: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    RESP_TRASLADO: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    NRO_RESOLUC_SBN: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    TIPO_INST: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NOMBRE_ENTIDAD: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    SEC_EJEC2: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    NRO_RESOLUC: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FECHA_RESOL: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_ACTA: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FECHA_ACTA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_CONVENIO: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FECHA_CONVENIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_RECEPCION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GLOSA: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    FLAG_CIERRE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_CIERRE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_APTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_SALIDA: {
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
    FLAG_CAJA_CHICA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_TRANSFERIR: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    TIPO_MODA_INST: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_SEC_SALIDA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    NRO_DOC_IDENTIDAD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ESTADO_REPARACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_CONTRATO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    DIRECCION: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    TELEFONOS: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FLAG_COMPONENTES: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    FLAG_TASACION: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    NRO_MOVIMTO_ORIG: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true,
      defaultValue: 0
    },
    NRO_TASACION: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    FECHA_TASACION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
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
    CODIGO_ALTA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FECHA_ACTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BENEFICIARIO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_BENEFICIARIO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    RUC_BENEFICIARIO: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    EMPLEADO_ENTR: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NRO_BAJA_ERROR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    BAJA_ANO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    BAJA_MES_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    BAJA_TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BAJA_NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_MOVIMIENTO_ACTIVO',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_MOVI_ACTIVO_01",
        fields: [
          { name: "sec_ejec" },
        ]
      },
      {
        name: "IND_SIG_MOVI_ACTIVO_02",
        fields: [
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
        ]
      },
      {
        name: "IND_SIG_MOVI_ACTIVO_04",
        fields: [
          { name: "pliego" },
          { name: "SEDE" },
        ]
      },
      {
        name: "IND_SIG_MOVI_ACTIVO_06",
        fields: [
          { name: "sec_ejec" },
          { name: "EMPLEADO" },
        ]
      },
      {
        name: "IND_SIG_MOVI_ACTIVO_07",
        fields: [
          { name: "TIPO_SALIDA" },
        ]
      },
      {
        name: "IND_SIG_MOVI_ACTIVO_08",
        fields: [
          { name: "TIPO_CAUSAL" },
          { name: "CLASE_CAUSAL" },
        ]
      },
      {
        name: "IND_SIG_MOVI_ACTIVO_10",
        fields: [
          { name: "ANO_EJE" },
          { name: "sec_ejec" },
          { name: "MES_PROCESO" },
          { name: "TIPO_MOVIMTO" },
          { name: "NRO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
          { name: "TIPO_PPTO" },
        ]
      },
      {
        name: "IND_SIG_MOVIMIENTO_ACTIVO_01",
        fields: [
          { name: "SEC_EJEC2" },
          { name: "TIPO_MOVIMTO" },
          { name: "sec_ejec" },
          { name: "MES_PROCESO" },
          { name: "ANO_EJE" },
          { name: "TIPO_TRANSAC" },
          { name: "TIPO_INST" },
          { name: "TIPO_BIEN" },
          { name: "SEDE" },
        ]
      },
      {
        name: "PK_SIG_MOVI_ACTIVO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "sec_ejec" },
          { name: "MES_PROCESO" },
          { name: "TIPO_MOVIMTO" },
          { name: "NRO_MOVIMTO" },
        ]
      },
    ]
  });
};
