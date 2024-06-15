const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPR_ESTABLECIMIENTO', {
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
    COD_ESTABLEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    DESC_ESTABLEC: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    TIPO_ESTABLEC: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    SECTOR_AMBITO: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    COD_INTERNO: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CAD_OPERATIVA: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    UBIGEO: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    COD_HIS: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    COD_OGEI: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    COD_SISMED: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    COD_SIS: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CATEGORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    FLAG_VALIDA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    COD_GESTION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    NRO_AMBIENTE: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FLAG_ENERGIA: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_N\r\n\tAS N"
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    INST_TIPO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATEONLY,
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
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PPR_ESTABLECIMIENTO',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "XPKSIG_PPR_ESTABLECIMIENTO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "COD_ESTABLEC" },
        ]
      },
    ]
  });
};
