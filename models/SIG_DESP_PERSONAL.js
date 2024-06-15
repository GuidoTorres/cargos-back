const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DESP_PERSONAL', {
    ANO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DESP_PEDIDOS',
        key: 'SEC_PEDIDO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DESP_PEDIDOS',
        key: 'SEC_PEDIDO'
      }
    },
    SEC_PEDIDO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DESP_PEDIDOS',
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
      allowNull: true
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
    SECUENCIA_ESCALA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    SECUENCIA_SD_ORIGEN: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    SECUENCIA_SD_DESTINO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    MONTO_PERSONAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_FAMILIAR: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_DESP_PERSONAL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_DESP_PERSONAL",
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
