const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_formulacion_detalle', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    tipo_presupuesto: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    ciclo: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    sec_meta: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    origen: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    fuente_financ: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    tipo_recurso: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    categ_gasto: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    grupo_gasto: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    modalidad_gasto: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    elemento_gasto: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    tipo_bien: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    grupo_bien: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    clase_bien: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    familia_bien: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    item_bien: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    unidad_medida: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(19,3),
      allowNull: true
    },
    monto: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    m01: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    m02: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    m03: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    m04: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    m05: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    m06: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    m07: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    m08: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    m09: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    m10: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    m11: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    m12: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tmp_formulacion_detalle',
    schema: 'dbo',
    timestamps: false
  });
};
