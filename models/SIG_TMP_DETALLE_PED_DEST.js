const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TMP_DETALLE_PED_DEST', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    PROCESO: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CANTIDAD_001: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_002: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_003: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_004: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_005: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_006: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_007: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_008: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_009: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_010: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_011: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_012: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_013: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_014: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_015: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_016: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_017: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_018: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_019: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_020: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_021: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_022: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_023: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_024: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_025: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_026: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_027: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_028: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_029: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_030: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_031: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_032: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_033: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_034: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_035: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_036: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_037: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_038: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_039: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_040: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_041: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_042: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_043: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_044: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_045: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_046: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_047: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_048: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_049: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    CANTIDAD_050: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TMP_DETALLE_PED_DEST',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIGTMPDETPEDDES",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "PROCESO" },
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
        ]
      },
    ]
  });
};
