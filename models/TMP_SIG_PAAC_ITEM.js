const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_SIG_PAAC_ITEM', {
    SPID: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    TIPO_CONSOLID: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false
    },
    TIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    SEC_CONSOLID: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
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
    MES_01: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_02: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_03: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_04: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_05: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_06: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_07: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_08: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_09: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_10: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_11: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    MES_12: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    FECHA_PRECIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    },
    PRECIO_UNIT: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    VALOR: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    PRECIO_MONEDA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    CANTIDAD_USO: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    UNIDAD_USO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    PRECIO_USO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    FACTOR_UNIDAD: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    PRESENTACION: {
      type: DataTypes.DECIMAL(5,0),
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
    },
    SEC_RESUMEN1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    sequelize,
    tableName: 'TMP_SIG_PAAC_ITEM',
    schema: 'dbo',
    timestamps: false
  });
};
