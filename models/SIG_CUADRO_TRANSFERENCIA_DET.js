const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CUADRO_TRANSFERENCIA_DET', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    ANNO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    NRO_TRANSFERENCIA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_TRANSFERENCIA',
        key: 'SEC_EJEC'
      }
    },
    SEC_TRANSFERENCIA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    SEC_CUADRO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    ORIG_SEC_ITEM: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    ORIG_ANNO_PROG: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    DEST_SEC_ITEM: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    DEST_ANNO_PROG: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    FLG_MNTO_01: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_02: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_03: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_04: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_05: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_06: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_07: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_08: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_09: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_10: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_11: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_12: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    CANT_01: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_02: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_03: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_04: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_05: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_06: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_07: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_08: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_09: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_10: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_11: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_12: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_CUADRO_TRANSFERENCIA_DET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CUADRO_TRANS_DET",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANNO_EJEC" },
          { name: "NRO_TRANSFERENCIA" },
          { name: "SEC_TRANSFERENCIA" },
        ]
      },
    ]
  });
};
