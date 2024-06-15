const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONTRATO_NOTAS', {
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
        model: 'SIG_PLANTILLA_GRUPO_NOTA',
        key: 'SEC_PLANTILLA'
      }
    },
    TIPO_CONTRATO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    NRO_CONTRATO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_GRUPO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PLANTILLA_GRUPO_NOTA',
        key: 'SEC_PLANTILLA'
      }
    },
    SEC_PLANTILLA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PLANTILLA_GRUPO_NOTA',
        key: 'SEC_PLANTILLA'
      }
    }
  }, {
    sequelize,
    tableName: 'SIG_CONTRATO_NOTAS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_CONT_NOTAS",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONTRATO" },
          { name: "NRO_CONTRATO" },
          { name: "SEC_GRUPO" },
          { name: "SEC_PLANTILLA" },
        ]
      },
    ]
  });
};
