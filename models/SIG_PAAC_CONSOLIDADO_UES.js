const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PAAC_CONSOLIDADO_UES', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_CONSOLIDADO',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_CONSOLIDADO',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_CONSOLID: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_CONSOLIDADO',
        key: 'TIPO_GENERACION'
      }
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_CONSOLIDADO',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PAAC_CONSOLIDADO',
        key: 'TIPO_GENERACION'
      }
    },
    SECUENCIAL: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC_UE: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    TIPO_CONSOLID_UE: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NRO_CONSOLID_UE: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PAAC_CONSOLIDADO_UES',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PAAC_CONSOLIDADO_UES",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONSOLID" },
          { name: "NRO_CONSOLID" },
          { name: "TIPO_GENERACION" },
          { name: "SECUENCIAL" },
        ]
      },
    ]
  });
};
