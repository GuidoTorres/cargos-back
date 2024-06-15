const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_ARQUEO_ACREDITACION', {
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
    SEC_ACREDITACION: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_CAJA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NRO_ACREDITACION: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FEC_ACREDITACION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_DOC_ACRED: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FEC_DOC_ACRED: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PERSONAL_AUTORIZA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PERSONAL_DESIGNADO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FEC_EJEC_ARQUEO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MONTO_ASIGNADO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    NOTA_GRUPO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    NOTA_PLANTILLA: {
      type: DataTypes.DECIMAL(5,0),
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
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_ARQUEO_ACREDITACION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TES_ARQUEO_ACREDITACION",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_ACREDITACION" },
        ]
      },
    ]
  });
};
