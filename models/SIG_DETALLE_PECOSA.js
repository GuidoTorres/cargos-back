const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DETALLE_PECOSA', {
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
    SEC_ATENCION: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    MARCA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    NRO_LOTE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHA_EXPIRACION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PRECIO_UNIT: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CANT_ATENDIDA: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CANT_APROBADA: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    NRO_PECOSA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    TIPO_MARCA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ANO_MOVIMTO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    PRECIO_MOVIMTO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    valor_total: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    ITEM_BIEN_DET: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_DETALLE_PECOSA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_DETALLE_PECOSA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "sec_ejec" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PEDIDO" },
          { name: "NRO_PEDIDO" },
          { name: "SECUENCIA" },
          { name: "SEC_ATENCION" },
        ]
      },
    ]
  });
};
