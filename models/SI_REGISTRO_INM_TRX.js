const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_REGISTRO_INM_TRX', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false
    },
    SEC_UNIDAD_ACTIVO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    SEC_COMPONENTE: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    CODIGO_ITEM: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    DENOMINACION: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    TASA_DEPRECIACION: {
      type: DataTypes.DECIMAL(8,4),
      allowNull: false
    },
    VALOR_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    ADEPR_ACUMUL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    MAYOR_C: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_C: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    VIDA_UTIL: {
      type: DataTypes.DECIMAL(8,6),
      allowNull: true
    },
    FECHA_ALTA_UA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FEC_FIN_VIDA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SALDO_VIDA_UTIL: {
      type: DataTypes.DECIMAL(8,6),
      allowNull: true
    },
    SALDO_VIDA_UTIL_MESES: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    SEC_COMPONENTE_SUSTITUIR: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    UBICACION_C: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ESTADO_C: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    DESCRIPCION_UA: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    TIPO_B: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    AREA_TERRENO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_TOTAL_CALCULADO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    TIPO_BAJA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    FECHA_BAJA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_RESOLUCION_BAJA: {
      type: DataTypes.STRING(40),
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
    UBICACION_UA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ESTADO_UA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MAYOR_UA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_UA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ANO_BAJA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MES_BAJA: {
      type: DataTypes.STRING(2),
      allowNull: true
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
    ESTADO_P: {
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
    MAYOR_P: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_P: {
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
    FECHA_ALTA_P: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_ALTA: {
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
      allowNull: false
    },
    IND_CERTIFICADO_VIGENCIA_PODER: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    ADJ_ACTA_DONACION: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    ADJ_DOCUMENTOS_ALTA: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    ADJ_DOCUMENTOS_BAJA: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    IND_SOLICITUD_DACION: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    IND_ACTA_DECOMISO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    IND_SENTENCIA: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    IND_SOLICITUD_TRANSFERENCIA: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    NRO_RESOLUCION: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ADJ_ACTA_RESOLUCION: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    OBSERVACIONES_ALTA: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ADJ_PARTIDA_REGISTRAL: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    ADJ_PLANO_PERIMIETRICO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    ADJ_PLANO_UBICAC: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    ADJ_MEMORIA_DESCRIPT: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    ADJ_TASACION: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    ADJ_FOTOGRAFIAS: {
      type: DataTypes.STRING(1),
      allowNull: false
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
    }
  }, {
    sequelize,
    tableName: 'SI_REGISTRO_INM_TRX',
    schema: 'dbo',
    timestamps: false
  });
};
