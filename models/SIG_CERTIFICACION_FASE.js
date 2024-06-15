const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CERTIFICACION_FASE', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CERTIFICACION',
        key: 'SEC_EJEC'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CERTIFICACION',
        key: 'SEC_EJEC'
      }
    },
    NRO_CERTIFICA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CERTIFICACION',
        key: 'SEC_EJEC'
      }
    },
    SECUENCIA_FASE: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_FASE: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    },
    TIPO_CONSOLID: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    TIPO_GENERACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_CONTRATO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_CONTRATO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    VALOR_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    NRO_CERTIFICA_SIAF: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    ESTADO_CERTIFICA_SIAF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ANO_EJE_DOC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    SEC_EJEC_DOC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    FLAG_COMPROMETIDO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_DOCUMENTO: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CERTIFICACION_FASE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SCF",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_CERTIFICA" },
          { name: "SECUENCIA_FASE" },
        ]
      },
    ]
  });
};
