const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_kardex_equivalencia_item', {
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
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_BIEN_E: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_BIEN_E: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASE_BIEN_E: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FAMILIA_BIEN_E: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ITEM_BIEN_E: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    UNIDAD_MEDIDA_E: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CLASIFICADOR_E: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MAYOR_E: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_E: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    ESTADO_E: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    INDICADOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_kardex_equivalencia_item',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_kardex_EQUI_item_01",
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN_E" },
          { name: "GRUPO_BIEN_E" },
          { name: "CLASE_BIEN_E" },
          { name: "FAMILIA_BIEN_E" },
          { name: "ITEM_BIEN_E" },
        ]
      },
      {
        name: "IND_kardex_EQUI_item_02",
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
        ]
      },
      {
        name: "IND_kardex_EQUI_item_03",
        fields: [
          { name: "ANO_EJE" },
          { name: "CLASIFICADOR" },
        ]
      },
      {
        name: "IND_kardex_EQUI_item_04",
        fields: [
          { name: "ANO_EJE" },
          { name: "MAYOR" },
          { name: "SUB_CTA" },
        ]
      },
      {
        name: "PK_sig_kardex_equiv_item",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
