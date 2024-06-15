const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONTRATO_ITEM_MENS_PED', {
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
    NRO_ITEM: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_PERIODO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_PEDIDO: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    NRO_PEDIDO: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CONTRATO_ITEM_MENS_PED',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CONTRATOITEMMENSPED",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONTRATO" },
          { name: "NRO_CONTRATO" },
          { name: "NRO_ITEM" },
          { name: "SEC_PERIODO" },
          { name: "TIPO_PEDIDO" },
          { name: "TIPO_BIEN" },
          { name: "NRO_PEDIDO" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
