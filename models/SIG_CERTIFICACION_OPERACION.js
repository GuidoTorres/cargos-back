const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CERTIFICACION_OPERACION', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CERTIFICACION_FASE',
        key: 'SECUENCIA_FASE'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CERTIFICACION_FASE',
        key: 'SECUENCIA_FASE'
      }
    },
    NRO_CERTIFICA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CERTIFICACION_FASE',
        key: 'SECUENCIA_FASE'
      }
    },
    SECUENCIA_FASE: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CERTIFICACION_FASE',
        key: 'SECUENCIA_FASE'
      }
    },
    SECUENCIA_OPERA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_OPERA: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
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
    SEC_FASE_CONT: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    SEC_MOVIMIENTO_CONT: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    SEC_ORDEN: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    SEC_DOCUMENTO_RP: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FLAG_DEVOLUCION: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG_IMPORTA_SIAF: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CERTIFICACION_OPERACION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SCO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_CERTIFICA" },
          { name: "SECUENCIA_FASE" },
          { name: "SECUENCIA_OPERA" },
        ]
      },
    ]
  });
};
