const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DETALLE_PEDIDO_COMISIONADO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_PEDIDOS',
        key: 'TIPO_PEDIDO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_personal',
        key: 'sec_ejec'
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
    SEC_COMISIONADO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'sig_personal',
        key: 'sec_ejec'
      }
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_DETALLE_PEDIDO_COMISIONADO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_DET_PED_COMI",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PEDIDO" },
          { name: "NRO_PEDIDO" },
          { name: "SECUENCIA" },
          { name: "SEC_COMISIONADO" },
        ]
      },
    ]
  });
};
