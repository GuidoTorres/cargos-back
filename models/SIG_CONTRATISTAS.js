const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONTRATISTAS', {
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_ID: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_CONTRAT: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    NRO_RUC: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    TIPO_DOC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NUM_DOC: {
      type: DataTypes.STRING(20),
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
    RESPONSABLE: {
      type: DataTypes.STRING(70),
      allowNull: true
    },
    CARGO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    DOC_IDENTIDAD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_INSCRIP: {
      type: DataTypes.DATE,
      allowNull: true
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
    REFERENCIA: {
      type: DataTypes.STRING(30),
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
    FECHA_ISANCION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_FSANCION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_PERSONA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FLAG_FACTURA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG_BOLETA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG_RECIBO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    PROFESION: {
      type: DataTypes.STRING(3),
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
    },
    FLAG_SNP: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG_RNP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_RNP: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    FLAG_CONSORCIO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_NO_DOMICILIADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG_MYPE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIP_PERSONA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG_DISCAPACIDAD: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    TIPO_PROV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    F_NACIMIENTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSPP: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    T_REGIMEN_PEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IND_TERC_PERM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CCI: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    ctacte_detraccion: {
      type: DataTypes.DECIMAL(11,0),
      allowNull: true
    },
    flag_epublica: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FLAG_ASEGURADORA: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    }
  }, {
    sequelize,
    tableName: 'SIG_CONTRATISTAS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CONTRATISTAS",
        unique: true,
        fields: [
          { name: "PROVEEDOR" },
        ]
      },
    ]
  });
};
