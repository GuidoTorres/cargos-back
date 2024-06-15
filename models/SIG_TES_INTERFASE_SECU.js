const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_INTERFASE_SECU', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_INTERFASE_CAB',
        key: 'SEC_EJEC'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_INTERFASE_CAB',
        key: 'SEC_EJEC'
      }
    },
    SEC_DOCUMENTO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_INTERFASE_CAB',
        key: 'SEC_EJEC'
      }
    },
    SEC_INTERFASE: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    FASE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_SECUENCIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_RECURSO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_PAGO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_COMPROMISO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SECUENCIAL: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ESTADO_SECU: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EXP_SIAF: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    SECU_SIAF: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CORR_SIAF: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_INTERFASE_SECU',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TES_INTERFASE_SECU",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_DOCUMENTO" },
          { name: "SEC_INTERFASE" },
        ]
      },
    ]
  });
};
