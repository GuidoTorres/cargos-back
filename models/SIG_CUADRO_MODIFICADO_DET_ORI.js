const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CUADRO_MODIFICADO_DET_ORI', {
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
    SEC_CUADRO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    SEC_ITEM: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    ANNO_PROG: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    TIPO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    FLG_MNTO_01_INI: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_02_INI: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_03_INI: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_04_INI: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_05_INI: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_06_INI: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_07_INI: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_08_INI: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_09_INI: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_10_INI: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_11_INI: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_12_INI: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    CANT_01_INI: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_02_INI: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_03_INI: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_04_INI: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_05_INI: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_06_INI: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_07_INI: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_08_INI: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_09_INI: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_10_INI: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_11_INI: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_12_INI: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_TOTAL_INI: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_CUADRO_MODIFICADO_DET_ORI',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CUA_MOD_DET_ORI",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANNO_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "SEC_CUADRO" },
          { name: "SEC_ITEM" },
          { name: "ANNO_PROG" },
          { name: "TIPO" },
        ]
      },
    ]
  });
};
