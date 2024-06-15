const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONTRATO_DET', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATOS',
        key: 'TIPO_CONTRATO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATOS',
        key: 'TIPO_CONTRATO'
      }
    },
    TIPO_CONTRATO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATOS',
        key: 'TIPO_CONTRATO'
      }
    },
    NRO_CONTRATO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATOS',
        key: 'TIPO_CONTRATO'
      }
    },
    ANO_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    EXP_SIGA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    SEC_CUADRO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    intf_cer: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    intf_cerse: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    intf_cerco: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    NRO_CERTIFICA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    FLAG_TIPO_CERT: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'SIG_CONTRATO_DET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_CONTRATO_DET_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONTRATO" },
          { name: "NRO_CONTRATO" },
        ]
      },
      {
        name: "PK_SIG_CONTRATO_DET",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONTRATO" },
          { name: "NRO_CONTRATO" },
          { name: "ANO_PROCESO" },
        ]
      },
    ]
  });
};
