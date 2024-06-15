const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_INVENTARIO_INM_TRX', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    NRO_INVENTARIO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    },
    NOMBRE_INVENTARIO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHA_INVENTARIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RESOLUCION: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SEC_UNIDAD_ACTIVO: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false
    },
    DENOMINACION_UA: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    IND_VERIFICA_UA: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    IND_SOBRANTE_UA: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    IND_FALTANTE_UA: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    OBSERVACIONES_1_UA: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    OBSERVACIONES_2_UA: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    OBSERVACIONES_3_UA: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CODIGO_ITEM: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    ESTADO_CONSERV_UA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CODIGO_TIPO_UA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    UBICACION: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false
    },
    DENOMINACION_INM: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    IND_VERIFICA_P: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    IND_SOBRANTE_P: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    IND_FALTANTE_P: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    OBSERVACIONES_1_P: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    OBSERVACIONES_2_P: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    OBSERVACIONES_3_P: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    SEDE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    CODIGO_TIPO_INM: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESTADO_CONSERV_P: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SI_INVENTARIO_INM_TRX',
    schema: 'dbo',
    timestamps: false
  });
};
