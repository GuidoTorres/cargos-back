const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DETALLE_PEDIDOS_ANEXO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_PEDIDOS',
        key: 'TIPO_PEDIDO'
      }
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_PEDIDOS',
        key: 'TIPO_PEDIDO'
      }
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_PEDIDOS',
        key: 'TIPO_PEDIDO'
      }
    },
    TIPO_PEDIDO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_PEDIDOS',
        key: 'TIPO_PEDIDO'
      }
    },
    NRO_PEDIDO: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_PEDIDOS',
        key: 'TIPO_PEDIDO'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_PEDIDOS',
        key: 'TIPO_PEDIDO'
      }
    },
    SEC_ANEXO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_REQUER: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ANEXO_ITEM: {
      type: DataTypes.TEXT,
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
    tableName: 'SIG_DETALLE_PEDIDOS_ANEXO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_DET_PEDIDO_ANEXO_01",
        fields: [
          { name: "sec_ejec" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PEDIDO" },
          { name: "NRO_PEDIDO" },
          { name: "SECUENCIA" },
          { name: "ANO_EJE" },
        ]
      },
      {
        name: "PK_SIG_DETALLE_PEDIDOS_ANEXO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "sec_ejec" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PEDIDO" },
          { name: "NRO_PEDIDO" },
          { name: "SECUENCIA" },
          { name: "SEC_ANEXO" },
        ]
      },
    ]
  });
};
