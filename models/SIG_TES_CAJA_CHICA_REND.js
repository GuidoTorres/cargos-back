const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_CAJA_CHICA_REND', {
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
    SEC_RENDICION: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_CAJA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_RENDICION: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FEC_RENDICION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RESPONSABLE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    MONTO_RENDICION: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_TRANSITO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    OBSERVACION: {
      type: DataTypes.STRING(250),
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
    },
    tipo_rendicion: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "R"
    },
    NRO_LIQUIDACION: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    EXP_SIGA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_CAJA_CHICA_REND',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TES_CC_REND",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_RENDICION" },
          { name: "SEC_CAJA" },
        ]
      },
    ]
  });
};
