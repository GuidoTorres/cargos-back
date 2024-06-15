const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PATRIMONIO_INM', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_SINABIP: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    TIPO_PATRIM: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    CLASE_PATRIM: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    SUBTIPO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    NOMBRE_INMUEBLE: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ESTADO_CONDICION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MOTIVO_CANCELACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_SANEAMIENTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_INFORMACION: {
      type: DataTypes.STRING(1),
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
    TIPO_VIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DIRECCION: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NUMERO: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    INTERIOR: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    MANZANA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    LOTE: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    PISO: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    HABILITACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SECTOR: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    REFERENCIA: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FECHA_ALTA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_ALTA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    FECHA_BAJA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_RESOLUCION_BAJA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHA_RESOLUCION_BAJA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    GLOSA_BAJA: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    TIPO_BAJA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    REPRESENTANTE_TIPO_PERSONA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    REPRESENTANTE_NRO_DOCUMENTO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    REPRESENTANTE_NOMBRE: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    REPRESENTANTE_EMPRESA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ADJ_ACTA_CONSTITUCION: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    IND_CERTIFICADO_VIGENCIA_PODER: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    ADJ_ACTA_DONACION: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    ADJ_DOCUMENTOS_ALTA: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    ADJ_DOCUMENTOS_BAJA: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    IND_SOLICITUD_DACION: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    IND_ACTA_DECOMISO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    IND_SENTENCIA: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    IND_SOLICITUD_TRANSFERENCIA: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    NRO_RESOLUCION: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ADJ_ACTA_RESOLUCION: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    OBSERVACIONES_ALTA: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ADJ_PARTIDA_REGISTRAL: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    ADJ_PLANO_PERIMIETRICO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    ADJ_PLANO_UBICAC: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    ADJ_MEMORIA_DESCRIPT: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    ADJ_TASACION: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    ADJ_FOTOGRAFIAS: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MES_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_MOVIMTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SEDE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NRO_RESOLUC: {
      type: DataTypes.STRING(40),
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
    RP_TITULAR: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RP_OFICINA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RP_FECHA_INSCRIPCION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RP_TOMO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    RP_FOJAS: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    RP_ASIENTO: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    RP_FICHA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    RP_PARTIDA_ELECTRONICA: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    RP_CODIGO_PREDIO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    RP_AREA_TERRENO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    RP_AREA_CONSTRUIDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    RP_OBSERVACIONES: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    TIPO_INMUEBLE_A: {
      type: DataTypes.STRING(2),
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
    FECHA_RESOL: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SEC_EJEC2: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    COD_MODALIDAD: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    IND_INSTITUCIONAL: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    FLAG_IMPORT: {
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
    ADJ_CERTIFICADO_PARAM: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    VALOR_IMPTO_RENTA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    VALOR_GASTO_NOT_REG: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    ADJ_INFORME_TECNICO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    ANO_EJE_II: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MES_PROCESO_II: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PATRIMONIO_INM',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PATRIMONIO_INM",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
