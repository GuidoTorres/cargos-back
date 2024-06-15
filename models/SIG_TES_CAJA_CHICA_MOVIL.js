const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_CAJA_CHICA_MOVIL', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_CAJA_CHICA_MOV',
        key: 'SEC_MOVIMTO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_CAJA_CHICA_MOV',
        key: 'SEC_MOVIMTO'
      }
    },
    SEC_CAJA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_CAJA_CHICA_MOV',
        key: 'SEC_MOVIMTO'
      }
    },
    SEC_MOVIMTO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_CAJA_CHICA_MOV',
        key: 'SEC_MOVIMTO'
      }
    },
    SEC_DESTINO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    DESTINO: {
      type: DataTypes.STRING(250),
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
    FEC_MOVILIDAD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HORA_INICIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HORA_FIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MONTO_MOVILIDAD: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_CAJA_CHICA_MOVIL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TES_CAJA_MOVIL",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_CAJA" },
          { name: "SEC_MOVIMTO" },
          { name: "SEC_DESTINO" },
        ]
      },
    ]
  });
};
