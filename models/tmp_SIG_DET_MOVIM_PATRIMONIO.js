const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_SIG_DET_MOVIM_PATRIMONIO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false
    },
    CODIGO_ACTIVO: {
      type: DataTypes.STRING(12),
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
    FLAG_SBN: {
      type: DataTypes.STRING(1),
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
    VALOR_BIEN: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    TIPO_ACTIVO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    },
    TIPO_DOC_REFER: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPO_DOCUMENTO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NRO_DOCUMENTO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    VALOR_NEA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    FECHA_NEA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SEDE: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    pliego: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EMPLEADO_FINAL: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TIPO_UBICAC: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    COD_UBICAC: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CARACTERISTICAS: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    OBSERVACIONES: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    MODELO: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MEDIDAS: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NRO_SERIE: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TIPO_MARCA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MARCA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    ESTADO_ACTUAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_CONSERV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_CONSERV_FIN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_MOVIMTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_COMPRA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VALOR_COMPRA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NRO_PECOSA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    FECHA_ALTA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    SEC_ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FLAG_ETIQUETA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_ETIQUET: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_SALIDA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FEC_FIN_VIDA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VIDA_UTIL: {
      type: DataTypes.DECIMAL(8,6),
      allowNull: true
    },
    VALOR_UIT: {
      type: DataTypes.DECIMAL(8,4),
      allowNull: true
    },
    MODAL_DEPREC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FACTOR_AJUSTE: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: true
    },
    TASA_DEPREC: {
      type: DataTypes.DECIMAL(8,4),
      allowNull: true
    },
    VALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_DEPREC: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ANO_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MES_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    HVALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    HDEPR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    HDEPR_AJUSTADA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    HDEPR_PERIODO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    HDEPR_EJERCICIO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    AVALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ADEPR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ADEPR_AJUSTADA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ADEPR_PERIODO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ADEPR_ACUMUL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ADEPR_EJERCICIO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    FECHA_PROCESO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO_VALOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_VALOR: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_CAUSAL: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    CLASE_CAUSAL: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    FEC_BAJA_CTBLE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FEC_BAJA_FISICA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OBSERV_BAJA: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    CODIGO_BARRA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    INVENT_SCANER: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_MOV_INGR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_TRAN_INGR: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    NRO_MOV_INGR: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    NRO_MOV_BAJA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    NRO_MOV_TRANS: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    MAYOR_BAJA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_BAJA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FLAG_CONTRATO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_CONTRATO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHA_GARANTIA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_GARANTIA_FIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_APTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_REPARACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_CUSTODIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_CUSTODIA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MOTIVO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ITEM_PROCESO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    SEC_CONTRATO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FLAG_COMPARTIDO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_UBICA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    OBSERV_FISICO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    FLAG_PECOSA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_FAMILIA_SBN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROYECTO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    FONDO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CODIGO_DESTINO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FLAG_DEVOLUCION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_PECOSA_TRANS: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    FEC_PECOSA_TRANS: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_TRANSFERIR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_MODA_INST: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SEC_TRANSFERIR: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    TIPO_MOVI_NEA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_TRAN_NEA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    NRO_EXPEDIENTE_BAJA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FECHA_ACT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EQUIPO_ACT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmp_SIG_DET_MOVIM_PATRIMONIO',
    schema: 'dbo',
    timestamps: false
  });
};
