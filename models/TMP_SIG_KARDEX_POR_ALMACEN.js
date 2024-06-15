const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_SIG_KARDEX_POR_ALMACEN', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    MES_PROCESO: {
      type: DataTypes.CHAR(2),
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
    TIPO_BIEN: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CODIGO_BIEN: {
      type: DataTypes.CHAR(12),
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
    TIPO_USO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    CORRELATIVO: {
      type: DataTypes.CHAR(4),
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
    NRO_ENCARGO: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    SEC_EJEC2: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    OPERACION: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    CANT_INVENT: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    CANT_BUENO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    STOCK_INICIAL: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    CANT_INGRESO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    CANT_EGRESO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    STOCK_ACTUAL: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    PRECIO_PROMED: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    SALDO_VALOR: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true
    },
    VALOR_INGRESO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_EGRESO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    SALDO_INICIAL: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true
    },
    ACTIVO_FIJO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    STOCK_ENERO: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true
    },
    CONS_ENERO: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true
    },
    PRECIO_INVENT: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    CANT_AJUSTE: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    FACTOR_AJUSTE: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    VALOR_AJUSTE: {
      type: DataTypes.DECIMAL(16,2),
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
    ITEM_BIEN_DET: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(16,0),
      allowNull: true
    },
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMP_SIG_KARDEX_POR_ALMACEN',
    schema: 'dbo',
    timestamps: false
  });
};
