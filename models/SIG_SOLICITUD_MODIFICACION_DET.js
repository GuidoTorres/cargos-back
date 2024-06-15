const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_SOLICITUD_MODIFICACION_DET', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    ANNO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    SEC_SOL_MOD: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SOLICITUD_MODIFICACION',
        key: 'SEC_SOL_MOD'
      }
    },
    SEC_SOL_MOD_DET: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_CUADRO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    SEC_ITEM: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    ANNO_PROG: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    MOTIVO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    PRECIO_UNIT: {
      type: DataTypes.DECIMAL(16,6),
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
    },
    FLAG_MNTO_INI: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    CANT_01_INI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_02_INI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_03_INI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_04_INI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_05_INI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_06_INI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_07_INI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_08_INI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_09_INI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_10_INI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_11_INI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    CANT_12_INI: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
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
    }
  }, {
    sequelize,
    tableName: 'SIG_SOLICITUD_MODIFICACION_DET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_SOLI_MODI_DET",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANNO_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "SEC_SOL_MOD" },
          { name: "SEC_SOL_MOD_DET" },
        ]
      },
    ]
  });
};
