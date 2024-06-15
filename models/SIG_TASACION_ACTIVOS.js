const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TASACION_ACTIVOS', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO',
        key: 'TIPO_MODALIDAD'
      }
    },
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO',
        key: 'TIPO_MODALIDAD'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PATRIMONIO',
        key: 'TIPO_MODALIDAD'
      }
    },
    NRO_SECUENCIA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE_TASADOR: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    VALOR_TASACION: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    FECHA_TASACION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_CTTP: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    NRO_CONATA: {
      type: DataTypes.STRING(60),
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
    NRO_COLEGIATURA: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    OBSERVACIONES: {
      type: DataTypes.STRING(200),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TASACION_ACTIVOS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_TASACION_01",
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
        ]
      },
      {
        name: "PK_SIG_TASACION",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
          { name: "NRO_SECUENCIA" },
        ]
      },
    ]
  });
};
