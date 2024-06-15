const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('metas_tmp', {
    ANO_EJE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SEC_EJEC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SEC_FUNC: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FUNCION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SUB_PROGRAMA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    META: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FINALIDAD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NOMBRE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    MONTO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UNIDAD_MED: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DEPARTAMENTO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    PROVINCIA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FECHA_ING: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    USUARIO_ING: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    USUARIO_MOD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    DISTRITO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    CANTIDAD_INICIAL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    SOCIAL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    TIPICO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    BASICO: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UNIDAD_MEDIDA_INICIAL: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ES_PIA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FECHA_GENERACION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ROWID: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'metas_tmp',
    schema: 'dbo',
    timestamps: false
  });
};
