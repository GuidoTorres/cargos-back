const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_OCE_DET', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ORDEN_ADQUISICION',
        key: 'TIPO_PPTO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ORDEN_ADQUISICION',
        key: 'TIPO_PPTO'
      }
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ORDEN_ADQUISICION',
        key: 'TIPO_PPTO'
      }
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ORDEN_ADQUISICION',
        key: 'TIPO_PPTO'
      }
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ORDEN_ADQUISICION',
        key: 'TIPO_PPTO'
      }
    },
    CEAM_OCE_ID: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true
    },
    CEAM_OCE_DET_ID: {
      type: DataTypes.CHAR(10),
      allowNull: false,
      primaryKey: true
    },
    CEAM_OCE: {
      type: DataTypes.CHAR(12),
      allowNull: false
    },
    MONTO_ID: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: false
    },
    CEAM_OCE_SECUENCIA: {
      type: DataTypes.CHAR(10),
      allowNull: false
    },
    MONTO_SEC: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_OCE_DET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_OCE_DET",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_ORDEN" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PPTO" },
          { name: "CEAM_OCE_ID" },
          { name: "CEAM_OCE_DET_ID" },
        ]
      },
    ]
  });
};
