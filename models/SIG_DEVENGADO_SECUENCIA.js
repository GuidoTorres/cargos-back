const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DEVENGADO_SECUENCIA', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVENGADO',
        key: 'SEC_EJEC'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVENGADO',
        key: 'SEC_EJEC'
      }
    },
    NRO_DEVENGADO: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVENGADO',
        key: 'SEC_EJEC'
      }
    },
    SEC_DEVENGADO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_DOCUMENTO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    SERIE_DOCUMENTO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NRO_DOCUMENTO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_DOCUMENTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MEJOR_FECHA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_SECUENCIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_EXP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_CONFIRMA: {
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
    SEC_DEVENGADO_PADRE: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    monto_igv: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    monto_exonerado: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    monto_retencion: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_PENALIDAD_OTROS: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_DEVENGADO_SECUENCIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_DEVENGADO_SEC_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_DEVENGADO" },
        ]
      },
      {
        name: "PK_SIG_DEVENGADO_SECUENCIA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_DEVENGADO" },
          { name: "SEC_DEVENGADO" },
        ]
      },
    ]
  });
};
