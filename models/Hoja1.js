const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Hoja1', {
    SEC_EJEC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_MODALIDAD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SECUENCIA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CODIGO_ACTIVO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_PATRIM: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CLASE_PATRIM: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SUBTIPO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_PPTO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FLAG_SBN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_ACTIVO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_DOC_REFER: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_DOCUMENTO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NRO_DOCUMENTO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    VALOR_NEA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FECHA_NEA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SEDE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pliego: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EMPLEADO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CENTRO_COSTO1: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EMPLEADO_FINAL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_UBICAC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COD_UBICAC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CARACTERISTICAS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_MODELO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MODELO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MEDIDAS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NRO_SERIE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_MARCA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cod_marca: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ESTADO_ACTUAL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ESTADO_CONSERV: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FECHA_MOVIMTO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FECHA_COMPRA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    VALOR_COMPRA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NRO_FACTURA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NRO_RESOLUCION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NRO_PECOSA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FECHA_ALTA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ALMACEN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SEC_ALMACEN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FLAG_ETIQUETA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FECHA_ETIQUET: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FLAG_SALIDA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FEC_FIN_VIDA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    VIDA_UTIL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    VALOR_UIT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MODAL_DEPREC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FACTOR_AJUSTE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TASA_DEPREC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    VALOR_INICIAL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    VALOR_DEPREC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ANO_PROCESO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MES_PROCESO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HVALOR_INICIAL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HDEPR_INICIAL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HDEPR_PERIODO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    HDEPR_EJERCICIO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    AVALOR_INICIAL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ADEPR_INICIAL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ADEPR_PERIODO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ADEPR_ACUMUL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ADEPR_EJERCICIO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FECHA_PROCESO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ESTADO_VALOR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FECHA_VALOR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_CAUSAL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CLASE_CAUSAL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FEC_BAJA_CTBLE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FEC_BAJA_FISICA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DOC_BAJA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    OBSERV_BAJA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CODIGO_BARRA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    INVENT_SCANER: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_MOV_INGR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_TRAN_INGR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NRO_MOV_INGR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NRO_MOV_BAJA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NRO_MOV_TRANS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ANO_EJE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MAYOR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FLAG_CONTRATO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NRO_CONTRATO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FECHA_GARANTIA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FECHA_GARANTIA_FIN: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FLAG_APTO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FLAG_REPARACION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ESTADO_CUSTODIA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FECHA_CUSTODIA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MOTIVO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ITEM_PROCESO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SEC_CONTRATO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FLAG_COMPARTIDO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FECHA_ACT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EQUIPO_ACT: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPO_ALTA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NUM_MOTOR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NUM_CHASIS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'AÑO_FAB': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'OBSERV#2': {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PLACA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COLOR: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CONCILIADOS: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    observaciones: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Hoja1',
    schema: 'dbo',
    timestamps: false
  });
};
