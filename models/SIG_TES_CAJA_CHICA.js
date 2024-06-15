const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_CAJA_CHICA', {
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
    SEC_CAJA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    COD_CAJA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    COD_CAJA_PRIN: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    COD_CAJA_DEP: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NOM_CAJA: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    SEDE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    EMPLEADO_PRIN: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    EMPLEADO_SUPL: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NRO_DOC_ASIGNACION: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FEC_DOC_ASIGNACION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    DIAS_RENDICION: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    OBSERVACIONES: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    FEC_APERTURA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO: {
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
    aux_empleado_prin: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    aux_empleado_supl: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    aux_ccosto_resp: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    aux_empleado_resp: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    aux_fec_apertura: {
      type: DataTypes.DATE,
      allowNull: true
    },
    aux_folios: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    FLAG_CTRL_PAO_PROY: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_CAJA_CHICA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TES_CAJA_CHICA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_CAJA" },
        ]
      },
    ]
  });
};
