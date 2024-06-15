const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_GUIA_REMISION', {
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
    ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    SEC_ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    TIPO_DOCUMENTO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    SERIE: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_GUIA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FECHA_EMISION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MES_EMISION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NUMERO: {
      type: DataTypes.DECIMAL(9,0),
      allowNull: true
    },
    FECHA_TRASLADO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DIR_ALMACEN: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    MOTIVO_TRASLADO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MOTIVO_OTROS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    SEC_EJEC2: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    RUC_EJEC2: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    CODIGO_DESTINO: {
      type: DataTypes.STRING(15),
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
    DIR_EJEC2: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    RUC_PROVEEDOR: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    NRO_CERTIFICADO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MARCA: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    PLACA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CONDUCTOR: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    LICENCIA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_GUIA_REMISION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GUIA_REM",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ALMACEN" },
          { name: "SEC_ALMACEN" },
          { name: "TIPO_DOCUMENTO" },
          { name: "SERIE" },
          { name: "SEC_GUIA" },
        ]
      },
    ]
  });
};
