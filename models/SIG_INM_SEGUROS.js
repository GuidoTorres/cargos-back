const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INM_SEGUROS', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO_INM',
        key: 'SECUENCIA'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO_INM',
        key: 'SECUENCIA'
      }
    },
    SEC_SEGURO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_COMPANIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    COD_CONSORCIO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    TIPO_SEGURO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ANO_EJE_CONTRATO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    SEC_EJEC_CONTRATO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    TIPO_CONTRATO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NRO_CONTRATO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    FEC_INI_CONTRATO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FEC_FIN_CONTRATO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_POLIZA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MONEDA_PRIMA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    TCAMBIO_PRIMA: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    },
    MNTO_MONEDA_PRIMA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MNTO_SOLES_PRIMA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONEDA_SUMA_ASEG: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    TCAMBIO_SUMA_ASEG: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    },
    MNTO_MONEDA_SUMA_ASEG: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MNTO_SOLES_SUMA_ASEG: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    OBSERVACIONES: {
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
    }
  }, {
    sequelize,
    tableName: 'SIG_INM_SEGUROS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_INM_SEG",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "SEC_SEGURO" },
        ]
      },
    ]
  });
};
