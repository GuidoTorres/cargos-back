const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DOCUMENTO_ESTADO', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SOLICITUD_GRUPO',
        key: 'SEC_SOL_GRU'
      }
    },
    SEC_DOC_EST: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    FLAG_ULT_MOV: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FECHA: {
      type: DataTypes.DATE,
      allowNull: false
    },
    OBSERVACION: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    SOL_ANNO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true,
      references: {
        model: 'SIG_SOLICITUD_MODIFICACION',
        key: 'SEC_SOL_MOD'
      }
    },
    SOL_CC: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'SIG_SOLICITUD_MODIFICACION',
        key: 'SEC_SOL_MOD'
      }
    },
    SEC_SOL_MOD: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      references: {
        model: 'SIG_SOLICITUD_MODIFICACION',
        key: 'SEC_SOL_MOD'
      }
    },
    SOL_GRU_ANNO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true,
      references: {
        model: 'SIG_SOLICITUD_GRUPO',
        key: 'SEC_SOL_GRU'
      }
    },
    SOL_GRU_SEC: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      references: {
        model: 'SIG_SOLICITUD_GRUPO',
        key: 'SEC_SOL_GRU'
      }
    }
  }, {
    sequelize,
    tableName: 'SIG_DOCUMENTO_ESTADO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_DOCUMENTO_ESTADO",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SEC_DOC_EST" },
          { name: "ESTADO" },
        ]
      },
    ]
  });
};
