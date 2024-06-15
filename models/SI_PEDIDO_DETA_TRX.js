const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_PEDIDO_DETA_TRX', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SI_PEDIDO_TRX',
        key: 'SEC_EJEC'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SI_PEDIDO_TRX',
        key: 'SEC_EJEC'
      }
    },
    ID_SI_PEDIDO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SI_PEDIDO_TRX',
        key: 'SEC_EJEC'
      }
    },
    ID_SI_PEDIDO_DETA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    ITEM_CATALOGO: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    D_ITEM_CATALOGO: {
      type: DataTypes.CHAR(150),
      allowNull: false
    },
    UNIDAD_MEDIDA_ITEM_BS: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false
    },
    D_UNIDAD_MEDIDA_ITEM_BS: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    CLASIFICADOR: {
      type: DataTypes.CHAR(20),
      allowNull: false
    },
    CANT_SOLICITADA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: false
    },
    PRECIO_UNIT: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: false
    },
    VALOR_TOTAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    NRO_CUADRO: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false
    },
    ESTADO_PED: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    CANT_APROBADA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    CANT_ATENDIDA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    NRO_PECOSA: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    FECHA_PECOSA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_CARGA_INICIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_CARGA_FIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_ENVIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USUARIO_ENVIO: {
      type: DataTypes.CHAR(4),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SI_PEDIDO_DETA_TRX',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SI_PEDIDO_DETA_TRX",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ID_SI_PEDIDO" },
          { name: "ID_SI_PEDIDO_DETA" },
        ]
      },
    ]
  });
};
