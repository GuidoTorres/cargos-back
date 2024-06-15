const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PAAC_DET_SECUENCIA', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_DET',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_DET',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_CONSOLID: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_DET',
        key: 'TIPO_GENERACION'
      }
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_DET',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_DET',
        key: 'TIPO_GENERACION'
      }
    },
    ANO_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_DET',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_FASE: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    FASE_CERTIFICA: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    ESTADO_FASE: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FECHA_ESTADO: {
      type: DataTypes.DATE,
      allowNull: false
    },
    FLAG_COMPROMETIDO: {
      type: DataTypes.STRING(1),
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
    },
    FLAG_DEVOLUCION: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SEC_MOVIMIENTO_CONT: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PAAC_DET_SECUENCIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PAAC_DET_SECUENCIA",
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
        ]
      },
    ]
  });
};
