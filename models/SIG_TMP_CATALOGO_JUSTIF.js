const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TMP_CATALOGO_JUSTIF', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_ITEM: {
      type: DataTypes.STRING(12),
      allowNull: false,
      primaryKey: true
    },
    UNIDAD_ADQUIS: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    UNIDAD_USO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    UNIDAD_ADQUIS_MEF: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE_EJEC: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    NOMBRE_CAT_INST: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NOMBRE_CAT_MEF: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NOMBRE_ADQUIS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NOMBRE_USO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    NOMBRE_ADQUIS_MEF: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    JUSTIFICACION: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    OBSERVACION: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    F_CN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    F_PROC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    F_CONTRATO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    F_OC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    F_KARDEX: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TMP_CATALOGO_JUSTIF',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TMP_CATALOGO_JUSTIF",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "CODIGO_ITEM" },
          { name: "UNIDAD_ADQUIS" },
          { name: "UNIDAD_USO" },
          { name: "UNIDAD_ADQUIS_MEF" },
        ]
      },
    ]
  });
};
