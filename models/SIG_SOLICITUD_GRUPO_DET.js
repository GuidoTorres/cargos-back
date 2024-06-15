const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_SOLICITUD_GRUPO_DET', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SOLICITUD_MODIFICACION',
        key: 'SEC_SOL_MOD'
      }
    },
    ANNO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SOLICITUD_GRUPO',
        key: 'SEC_SOL_GRU'
      }
    },
    SEC_SOL_GRU: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SOLICITUD_GRUPO',
        key: 'SEC_SOL_GRU'
      }
    },
    SEC_SOL_GRU_DET: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
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
    }
  }, {
    sequelize,
    tableName: 'SIG_SOLICITUD_GRUPO_DET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_SOLI_GRUPO_DET",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANNO_EJEC" },
          { name: "SEC_SOL_GRU" },
          { name: "SEC_SOL_GRU_DET" },
        ]
      },
    ]
  });
};
