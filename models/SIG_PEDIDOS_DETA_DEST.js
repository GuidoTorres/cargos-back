const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PEDIDOS_DETA_DEST', {
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
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TIPO_PEDIDO: {
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
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_ITEM_DEST: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_DESTINO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PEDIDOS_DETA_DEST',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIGDETPEDDES1",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PEDIDO" },
          { name: "NRO_PEDIDO" },
          { name: "SECUENCIA" },
        ]
      },
      {
        name: "IND_SIGDETPEDDES2",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PEDIDO" },
          { name: "NRO_PEDIDO" },
          { name: "SEC_DESTINO" },
        ]
      },
      {
        name: "PK_SIGDETPEDDES",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PEDIDO" },
          { name: "NRO_PEDIDO" },
          { name: "SECUENCIA" },
          { name: "SEC_ITEM_DEST" },
        ]
      },
    ]
  });
};
