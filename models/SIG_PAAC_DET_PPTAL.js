const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PAAC_DET_PPTAL', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_DET_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_DET_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_CONSOLID: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_DET_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_DET_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_DET_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    ANO_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_DET_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_FASE: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_DET_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    FASE_CERTIFICA: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_DET_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_DET_PPTAL: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false,
      defaultValue: 0
    },
    VALOR_SOLES: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false,
      defaultValue: 0
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
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_PAAC_DET_PPTAL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PAAC_DET_PPTAL",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONSOLID" },
          { name: "NRO_CONSOLID" },
          { name: "TIPO_GENERACION" },
          { name: "ANO_PROCESO" },
          { name: "SEC_FASE" },
          { name: "FASE_CERTIFICA" },
          { name: "SEC_DET_PPTAL" },
        ]
      },
    ]
  });
};
