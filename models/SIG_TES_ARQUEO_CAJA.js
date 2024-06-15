const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_ARQUEO_CAJA', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_ARQUEO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_CAJA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    SEC_ACREDITACION: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    NRO_ARQUEO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FEC_ARQUEO_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HORA_INICIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HORA_FIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MONTO_ASIGNADO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_EFECTIVO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    OBS_EFECTIVO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MONTO_VALE: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    OBS_VALE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MONTO_COMPROB: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    OBS_COMPROB: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MONTO_TRAMITE: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    OBS_TRAMITE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MONTO_TOTAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_REDONDEO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    OBS_REDONDEO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    OBS_OTROS: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    RECOMENDACIONES: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
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
    tableName: 'SIG_TES_ARQUEO_CAJA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TES_ARQUEO_CAJA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_ARQUEO" },
        ]
      },
    ]
  });
};
