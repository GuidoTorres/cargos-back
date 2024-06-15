const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_CONTRATISTA', {
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
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NRO_RUC: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    GIRO_GENERAL: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    NOMBRE_PROV: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    TELEFONOS: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    TELEFONO_FAX: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DIRECCION: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    DEPARTAMENTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROVINCIA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DISTRITO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NRO_RNP: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FECHA_CARGA_INICIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_CARGA_FIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_ENVIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USUARIO_ENVIO: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SI_CONTRATISTA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SI_CONTRATISTA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "PROVEEDOR" },
        ]
      },
      {
        name: "XPKSI_CONTRATISTA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "PROVEEDOR" },
        ]
      },
    ]
  });
};
