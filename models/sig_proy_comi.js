const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_proy_comi', {
    ANO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_proy_pedidos',
        key: 'SEC_PEDIDO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_proy_pedidos',
        key: 'SEC_PEDIDO'
      }
    },
    SEC_PEDIDO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_proy_pedidos',
        key: 'SEC_PEDIDO'
      }
    },
    SEC_ITEM_COMI: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    CARGO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true,
      references: {
        model: 'sig_proy_cargo',
        key: 'CARGO'
      }
    },
    COMISIONADO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    NOMBRE_RUTA: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    FECHA_INICIO_COMISION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_FIN_COMISION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_DIAS: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    COMI_INI: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CATEGORIA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SUBCATEGORIA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SUBSUBCATEGORIA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROYECTO_CAT: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    FLAG_ENCARGO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ENTIDAD: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    sec_func: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    fuente_financ: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_HORAS: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    nro_minutos: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    beneficiario: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    banco_tipcta: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    banco_nrocta: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_proy_comi',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__sig_proy_comi__1BBECB93",
        unique: true,
        fields: [
          { name: "ANO_EJEC" },
          { name: "SEC_EJEC" },
          { name: "SEC_PEDIDO" },
          { name: "SEC_ITEM_COMI" },
        ]
      },
    ]
  });
};
