const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_CAJA_CHICA_LIQUIDA_EXT', {
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
    NRO_EXTORNO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    FEC_EXTORNO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    COD_SOLICITANTE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    JUSTIFICACION: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    COD_USUARIO: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_CAJA_CHICA_LIQUIDA_EXT',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TES_CAJA_CHICA_LIQU_EXT",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_CAJA" },
          { name: "NRO_EXTORNO" },
        ]
      },
    ]
  });
};
