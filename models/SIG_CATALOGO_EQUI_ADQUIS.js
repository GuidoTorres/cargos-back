const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CATALOGO_EQUI_ADQUIS', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
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
    UNIDAD_ADQUIS: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
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
    PRECIO_REF_E: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    UNIDAD_ADQUIS_E: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    ESTADO_E: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FACTOR_CONV_ADQUIS: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    INDICADOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_CONTRATO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_MOVIMIENTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_PROC: {
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
    tableName: 'SIG_CATALOGO_EQUI_ADQUIS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CATALOGO_EQUI_ADQUIS",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
          { name: "UNIDAD_ADQUIS" },
        ]
      },
    ]
  });
};
