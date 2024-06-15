const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PATRIMONIO_AJUSTE_CAB', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    ANO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    COD_AJUSTE: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_DOCUMENTO: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    FEC_DOCUMENTO: {
      type: DataTypes.DATE,
      allowNull: false
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'SIG_PATRIMONIO_AJUSTE_CAB',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_AJUSTE_CAB",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANO_EJEC" },
          { name: "COD_AJUSTE" },
        ]
      },
    ]
  });
};
