const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_SIG_DETALLE_ACTIVOS', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    MES_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    NRO_SECUENCIA: {
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
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    MONTO_ORDEN: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ESTADO_SALIDA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    OBSERV_SALIDA: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    FECHA_RETORNO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO_RETORNO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    OBSERV_RETORNO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ANO_SALIDA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MES_SALIDA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NRO_SALIDA: {
      type: DataTypes.DECIMAL(6,0),
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
    }
  }, {
    sequelize,
    tableName: 'tmp_SIG_DETALLE_ACTIVOS',
    schema: 'dbo',
    timestamps: false
  });
};
