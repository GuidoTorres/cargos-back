const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('t_meta', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    FUNCION: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    PROGRAMA: {
      type: DataTypes.STRING(3),
      allowNull: false
    },
    SUB_PROGRAMA: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    ACT_PROY: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    COMPONENTE: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    META: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    FINALIDAD: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    MONTO: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(19,3),
      allowNull: true
    },
    UNIDAD_MED: {
      type: DataTypes.STRING(3),
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
    FECHA_ING: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USUARIO_ING: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USUARIO_MOD: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    DISTRITO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CANTIDAD_INICIAL: {
      type: DataTypes.DECIMAL(19,3),
      allowNull: true
    },
    SOCIAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPICO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    BASICO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    UNIDAD_MEDIDA_INICIAL: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    ES_PIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 't_meta',
    schema: 'dbo',
    timestamps: false
  });
};
