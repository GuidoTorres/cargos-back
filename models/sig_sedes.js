const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_sedes', {
    sede: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    pliego: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pliego',
        key: 'sector'
      }
    },
    sector: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'pliego',
        key: 'sector'
      }
    },
    nombre_sede: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    referencia: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    pais: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    departamento: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    provincia: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    distrito: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    fecha_reg: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_PRINCIPAL: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    CODIGO_SBN: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ANO_PROC_CTBLE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MES_PROC_CTBLE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MACROREGION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SECTOR_AMBITO: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_sedes',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_SIG_SEDES",
        unique: true,
        fields: [
          { name: "sede" },
          { name: "pliego" },
        ]
      },
      {
        name: "ind_sig_sedes_01",
        fields: [
          { name: "pais" },
          { name: "departamento" },
          { name: "provincia" },
          { name: "distrito" },
        ]
      },
      {
        name: "ind_sig_sedes_02",
        fields: [
          { name: "sector" },
          { name: "pliego" },
        ]
      },
      {
        name: "PK_SIG_SEDES",
        unique: true,
        fields: [
          { name: "sede" },
          { name: "pliego" },
        ]
      },
    ]
  });
};
