const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_proy_comi_ruta', {
    ANO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_proy_comi_destino',
        key: 'SEC_PEDIDO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_proy_comi_destino',
        key: 'SEC_PEDIDO'
      }
    },
    SEC_PEDIDO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_proy_comi_destino',
        key: 'SEC_PEDIDO'
      }
    },
    SEC_ITEM_COMI: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_proy_comi_destino',
        key: 'SEC_PEDIDO'
      }
    },
    SEC_ITEM_DESTINO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_proy_comi_destino',
        key: 'SEC_PEDIDO'
      }
    },
    SEC_ITEM_RUTA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    O_SEC_DESTINO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true,
      references: {
        model: 'sig_proy_destino',
        key: 'SEC_DESTINO'
      }
    },
    D_SEC_DESTINO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true,
      references: {
        model: 'sig_proy_destino',
        key: 'SEC_DESTINO'
      }
    },
    TIPO_RUTA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_INICIO_PARTIDA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_FIN_LLEGADA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    observacion_o: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    observacion_d: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_proy_comi_ruta',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__sig_proy_comi_ru__2918C6B1",
        unique: true,
        fields: [
          { name: "ANO_EJEC" },
          { name: "SEC_EJEC" },
          { name: "SEC_PEDIDO" },
          { name: "SEC_ITEM_COMI" },
          { name: "SEC_ITEM_DESTINO" },
          { name: "SEC_ITEM_RUTA" },
        ]
      },
    ]
  });
};
