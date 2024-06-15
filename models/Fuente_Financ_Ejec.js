const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Fuente_Financ_Ejec', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Fuente_Financ',
        key: 'ORIGEN'
      }
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
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Fuente_Financ',
        key: 'ORIGEN'
      }
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Fuente_Financ',
        key: 'ORIGEN'
      }
    },
    monto_asignado: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FUENTE_PIA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Fuente_Financ_Ejec',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_FUENTE_FINANC_EJEC_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
        ]
      },
      {
        name: "PK_FUENTE_FINANC_EJEC",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
        ]
      },
    ]
  });
};
