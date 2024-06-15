const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TMP_PS_REP_CONS_EVAL', {
    NRO_LOTE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NIVEL_GRUPO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NRO_GRUPO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NRO_NIVEL: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    NRO_PROPUESTA: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    TIPO_LOTE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    NOMBRE_LOTE: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    NOMBRE_DETALLE: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    NOMBRE_MEDIDA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    VALOR_REFERENCIA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    DESCRIPCION_01: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    DESCRIPCION_02: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    DESCRIPCION_03: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    DESCRIPCION_04: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    DESCRIPCION_05: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    DESCRIPCION_06: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    PUNTAJE_01: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PUNTAJE_02: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PUNTAJE_03: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PUNTAJE_04: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PUNTAJE_05: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PUNTAJE_06: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CALIFICACION_01: {
      type: DataTypes.DECIMAL(16,3),
      allowNull: true
    },
    CALIFICACION_02: {
      type: DataTypes.DECIMAL(16,3),
      allowNull: true
    },
    CALIFICACION_03: {
      type: DataTypes.DECIMAL(16,3),
      allowNull: true
    },
    CALIFICACION_04: {
      type: DataTypes.DECIMAL(16,3),
      allowNull: true
    },
    CALIFICACION_05: {
      type: DataTypes.DECIMAL(16,3),
      allowNull: true
    },
    CALIFICACION_06: {
      type: DataTypes.DECIMAL(16,3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TMP_PS_REP_CONS_EVAL',
    schema: 'dbo',
    timestamps: false
  });
};
