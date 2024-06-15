const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_FACTOR_EVALUACION', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'ejecutora',
        key: 'sec_ejec'
      }
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    CLASE: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TIPO_ORGANISMO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    OBJETO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    TIPO_EVALUACION: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TIPO_FACTOR: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    SEC_FACTOR: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE_FACTOR: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    INDICADOR: {
      type: DataTypes.STRING(1),
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
    tableName: 'SIG_FACTOR_EVALUACION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_FACTOR_EVAL_01",
        fields: [
          { name: "SEC_EJEC" },
        ]
      },
      {
        name: "PK_SIG_FACTOR_EVALUACION",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "CLASE" },
          { name: "TIPO_ORGANISMO" },
          { name: "OBJETO" },
          { name: "TIPO_EVALUACION" },
          { name: "TIPO_FACTOR" },
          { name: "SEC_FACTOR" },
        ]
      },
    ]
  });
};
