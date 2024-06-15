const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_SIG_DETALLE_MOVIM_ALMACEN', {
    sec_ejec: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    ALMACEN: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    SEC_ALMACEN: {
      type: DataTypes.CHAR(3),
      allowNull: true
    },
    TIPO_MOVIMTO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    SEC_DETALLE: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    SEC_ITEM: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    GRUPO_BIEN: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    CLASE_BIEN: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    ITEM_BIEN: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    MARCA: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    MAYOR: {
      type: DataTypes.CHAR(4),
      allowNull: true
    },
    SUB_CTA: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    OPERACION: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    ACTIVO_FIJO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_ACTIVO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FECHA_ENTRADA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CANT_ADQUIRIDO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    MEDIDA_ADQUIS: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    CANT_RECIBIDO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    CANT_ARTICULO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    CANT_DEVUELTA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    PRECIO_UNIT: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    PRECIO_MONEDA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    VALOR_TOTAL: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true
    },
    FECHA_MOVIMTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    INDI_RECIBIDO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    PRECIO_PROMED: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    TIPO_DESTINO: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    MODAL_DESTINO: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    FLAG_DESTINO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    MES_PROCESO: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    CANT_ATENDIDA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    STOCK_ACTUAL: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    VALOR_ACTUAL: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true
    },
    TIPO_MOVIMTO_ORIG: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_TRANSAC_ORIG: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    TIPO_PPTO_ORIG: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    NRO_MOVIMTO_ORIG: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    SECUENCIA_ORIG: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    SEC_DETALLE_ORIG: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    FLAG_INTERFASE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FECHA_INTERFASE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.CHAR(8),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    TIPO_MARCA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NOMBRE_INTERFASE: {
      type: DataTypes.CHAR(50),
      allowNull: true
    },
    ANO_PPA: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    NRO_PPA: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    FLAG_EXO_IMPTO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG_CREDITO_FISCAL: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CONSUMO_INTERFASE: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    TIPO_USO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ITEM_BIEN_DET: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    ESTADO_RECEPCION: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    especificaciones: {
      type: DataTypes.CHAR(255),
      allowNull: true
    },
    SEC_MODELO: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMP_SIG_DETALLE_MOVIM_ALMACEN',
    schema: 'dbo',
    timestamps: false
  });
};
