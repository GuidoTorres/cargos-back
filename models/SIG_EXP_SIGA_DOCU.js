const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_EXP_SIGA_DOCU', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_EXP_SIGA',
        key: 'TIPO_PPTO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_EXP_SIGA',
        key: 'TIPO_PPTO'
      }
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_EXP_SIGA',
        key: 'TIPO_PPTO'
      }
    },
    EXP_SIGA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_EXP_SIGA',
        key: 'TIPO_PPTO'
      }
    },
    EXP_SIGA_DOC: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_DOCUMENTO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NRO_DOCUMENTO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHA_DOCUMENTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_OPERACION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MODAL_COMPRA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    },
    FECHA_CANCEL: {
      type: DataTypes.DATE,
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
    Tipo_Pago: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    Tipo_Recurso: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    Tipo_Compromiso: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    FECHA_INTERFASE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EXP_SIAF: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    FASE_CONTRACTUAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_EXP_SIGA_DOCU',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_EXP_SIGA_DOCU_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_PPTO" },
          { name: "EXP_SIGA" },
        ]
      },
      {
        name: "PK_SIG_EXP_SIGA_DOCU",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_PPTO" },
          { name: "EXP_SIGA" },
          { name: "EXP_SIGA_DOC" },
        ]
      },
    ]
  });
};
