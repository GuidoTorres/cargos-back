const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MOVIM_PATRIMONIO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO',
        key: 'TIPO_MODALIDAD'
      }
    },
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO',
        key: 'TIPO_MODALIDAD'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO',
        key: 'TIPO_MODALIDAD'
      }
    },
    FACTOR_AJUSTE: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: true
    },
    TASA_DEPREC: {
      type: DataTypes.DECIMAL(8,4),
      allowNull: true
    },
    HVALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    HDEPR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    HDEPR_AJUSTADA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    HDEPR_PERIODO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    HDEPR_EJERCICIO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    AVALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ADEPR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ADEPR_AJUSTADA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ADEPR_PERIODO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ADEPR_EJERCICIO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    HVALOR_INICIAL_ORIG: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    HDEPR_INICIAL_ORIG: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    HVALOR_DETERIORO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    SALDO_VALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    M_TASA_DEPREC: {
      type: DataTypes.DECIMAL(8,4),
      allowNull: true,
      defaultValue: 0
    },
    M_HVALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    M_HDEPR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    M_SALDO_VALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'SIG_MOVIM_PATRIMONIO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_MOVIM_PAT_01",
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
        ]
      },
      {
        name: "PK__SIG_MOVIM_PATRIM__03E74202",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
