const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INV_INICIAL_temp', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    SEC_UNIDAD_ACTIVO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    SEC_COMPONENTE: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_1: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SUB_CTA_2: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_3: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    VALOR: {
      type: DataTypes.DECIMAL(38,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_INV_INICIAL_temp',
    schema: 'dbo',
    timestamps: false
  });
};
