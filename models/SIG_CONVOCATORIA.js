const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONVOCATORIA', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROCESO_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROCESO_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROCESO_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    PROCESO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROCESO_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROCESO_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    CONVOCATORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_INICIAL: {
      type: DataTypes.DATE,
      allowNull: false
    },
    FECHA_FINAL: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DIAS_PLAZO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
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
    FECHA_TCAMBIO: {
      type: DataTypes.DATE,
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
    PUNTAJE_TECNICO: {
      type: DataTypes.DECIMAL(7,4),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PUNTAJE_ECONOMICO: {
      type: DataTypes.DECIMAL(7,4),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PUNTAJE_MINIMO: {
      type: DataTypes.DECIMAL(7,4),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    TOPE_MAYOR: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    TOPE_MENOR: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MODALIDAD: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_EVALUACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROPUESTA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_RESOLUCION: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FECHA_RESOLUCION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CODIGO_OFICIAL: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FECHA_PUBLICACION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_RESULTADO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_BUENAPRO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RESOLUCION_COMITE: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FECHA_COMITE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RESUMEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VERIFICADOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_ENVIO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MOTIVO_ESTADO: {
      type: DataTypes.STRING(250),
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
    TIPO_VALOR_REF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_ACTO_PRES: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_ACTO_BPRO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MEDIO_PUBLICACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_FACTOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VERIFICADOR_CARGO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FLAG_FACTOR_LOTE: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    DIRECCION_BASE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FLAG_EQUIVALENCIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ID_PROCESO: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    MODAL_PP: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SIS_CONT: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DIRECCION: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    DEPARTAMENTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROVINCIA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DISTRITO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    HORARIO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PARTICIPACION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MONTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    IMPORTE: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    LUGAR_PAGO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NRO_CUENTA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    FLAG_IMPORTA: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CONVOCATORIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CONVOCATORIA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_GENERACION" },
          { name: "PROCESO" },
          { name: "SEC_PROCESO" },
          { name: "CONVOCATORIA" },
        ]
      },
    ]
  });
};
