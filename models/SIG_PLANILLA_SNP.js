const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PLANILLA_SNP', {
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
    SEC_PLANILLA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_PLANILLA: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    FECHA_EJECUCION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PERIODO_ANO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    PERIODO_MES: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NRO_CUADRO: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    RESPONSABLE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    GLOSA: {
      type: DataTypes.STRING(250),
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
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    SEC_EJEC2: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FLAG_TESORO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PLANILLA_SNP',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SIG_PLANILLA_SNP__46A92998",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_PLANILLA" },
          { name: "SEC_PLANILLA" },
        ]
      },
    ]
  });
};
