const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CUADRO_MODIFICADO_SALDO', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    ANNO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_CUA_MOD_SAL: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    CANT_01: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_01_SC: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_01_CMN: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false
    },
    CANT_02: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_02_SC: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_02_CMN: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false
    },
    CANT_03: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_03_SC: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_03_CMN: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false
    },
    CANT_04: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_04_SC: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_04_CMN: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false
    },
    CANT_05: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_05_SC: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_05_CMN: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false
    },
    CANT_06: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_06_SC: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_06_CMN: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false
    },
    CANT_07: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_07_SC: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_07_CMN: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false
    },
    CANT_08: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_08_SC: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_08_CMN: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false
    },
    CANT_09: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_09_SC: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_09_CMN: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false
    },
    CANT_10: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_10_SC: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_10_CMN: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false
    },
    CANT_11: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_11_SC: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_11_CMN: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false
    },
    CANT_12: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_12_SC: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_12_CMN: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false
    },
    CANT_TOTAL_ORI: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false,
      defaultValue: 0
    },
    CANT_TOTAL: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_TOTAL_SC: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_TOTAL_CMN: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_CUADRO_MODIFICADO_SALDO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CUA_MOD_SALDO",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANNO_EJEC" },
          { name: "SEC_CUA_MOD_SAL" },
        ]
      },
    ]
  });
};
