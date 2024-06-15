const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_RECIBO_PROV', {
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
    SECUENCIA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    COD_CAJA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    NRO_RECIBO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    FEC_RECIBO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MES_RECIBO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    VALOR_TOTAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    COD_PERSONA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    TIPO_PAGO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    BANCO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NRO_DOC_PAGO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FEC_DOC_PAGO: {
      type: DataTypes.DATE,
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
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_RECIBO_PROV',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TES_RECIBO_PROV",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
