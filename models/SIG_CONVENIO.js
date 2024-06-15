const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONVENIO', {
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
    ROL_ENCARGO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    NRO_CONVENIO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_DOC_CONVENIO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    COD_CONVENIO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SECTOR_CONVENIO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PLIEGO_CONVENIO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SEC_EJEC_CONVENIO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    FECHA_INI_CONVENIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_FIN_CONVENIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MOTIVO_CONVENIO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ESTADO_CONVENIO: {
      type: DataTypes.CHAR(1),
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
    SECUENCIA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    flag_tesoro: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    monto_total: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    tipo_entidad: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CONVENIO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CONVENIO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ROL_ENCARGO" },
          { name: "NRO_CONVENIO" },
        ]
      },
    ]
  });
};
