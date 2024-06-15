const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PATRIMONIO_AJUSTE_DET', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO_AJUSTE_CAB',
        key: 'SEC_EJEC'
      }
    },
    ANO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO_AJUSTE_CAB',
        key: 'SEC_EJEC'
      }
    },
    COD_AJUSTE: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO_AJUSTE_CAB',
        key: 'SEC_EJEC'
      }
    },
    SEC_AJUSTE: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false
    },
    TIPO_ACTIVO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IND_TIPO_DEPREC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_DEPR_SALDO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    M_VIDA_UTIL: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: 0
    },
    M_TASA_DEPREC: {
      type: DataTypes.DECIMAL(8,4),
      allowNull: true,
      defaultValue: 0
    },
    M_FEC_FIN_VIDA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    M_VALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    M_VALOR_DEPREC: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    M_NRO_PECOSA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    M_TIPO_DOC_REFER: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    M_TIPO_TRAN_NEA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    M_NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    M_FECHA_COMPRA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    M_VALOR_COMPRA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: 0
    },
    M_NRO_DOCUMENTO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    M_FECHA_NEA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    M_VALOR_NEA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: 0
    },
    M_FLAG_DEPR_SALDO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    M_VIDA_UTIL_MESES: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      defaultValue: 0
    },
    M_SALDO_VALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    OBSERVACION: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    VIDA_UTIL: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: 0
    },
    TASA_DEPREC: {
      type: DataTypes.DECIMAL(8,4),
      allowNull: true,
      defaultValue: 0
    },
    FECHA_ALTA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FEC_FIN_VIDA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    VALOR_DEPREC: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    NRO_PECOSA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    TIPO_DOC_REFER: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPO_TRAN_NEA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    FECHA_COMPRA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VALOR_COMPRA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: 0
    },
    NRO_DOCUMENTO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FECHA_NEA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VALOR_NEA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: 0
    },
    HVALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    HDEPR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    HDEPR_PERIODO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    HDEPR_EJERCICIO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    HDEPR_AJUSTADA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    AVALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    ADEPR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    ADEPR_PERIODO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    ADEPR_ACUMUL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    ADEPR_EJERCICIO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    ADEPR_AJUSTADA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    VALOR_INICIAL_ORIG: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    VALOR_DEPREC_ORIG: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    VIDA_UTIL_MESES: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      defaultValue: 0
    },
    SALDO_VALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    FECHA_INVINI: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DIAS_INVINI: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      defaultValue: 0
    },
    AUDIT_FEC_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AUDIT_USU_REG: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    AUDIT_EQP_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    AUDIT_FEC_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AUDIT_USU_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    AUDIT_EQP_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PATRIMONIO_AJUSTE_DET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AJUSTE_DET",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANO_EJEC" },
          { name: "COD_AJUSTE" },
          { name: "SEC_AJUSTE" },
        ]
      },
    ]
  });
};
