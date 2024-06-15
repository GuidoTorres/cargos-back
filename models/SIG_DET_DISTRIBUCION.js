const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DET_DISTRIBUCION', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CAB_DISTRIBUCION',
        key: 'TIPO_PEDIDO'
      }
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CAB_DISTRIBUCION',
        key: 'TIPO_PEDIDO'
      }
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CAB_DISTRIBUCION',
        key: 'TIPO_PEDIDO'
      }
    },
    TIPO_PEDIDO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CAB_DISTRIBUCION',
        key: 'TIPO_PEDIDO'
      }
    },
    NRO_PEDIDO: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CAB_DISTRIBUCION',
        key: 'TIPO_PEDIDO'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CAB_DISTRIBUCION',
        key: 'TIPO_PEDIDO'
      }
    },
    SEC_DISTRIB: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CAB_DISTRIBUCION',
        key: 'TIPO_PEDIDO'
      }
    },
    SEC_ACTIVO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_SBN: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    CODIGO_BARRA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    SECUENCIA_ACTIVO: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_DET_DISTRIBUCION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_DET_DISTRIBUCION",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "sec_ejec" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PEDIDO" },
          { name: "NRO_PEDIDO" },
          { name: "SECUENCIA" },
          { name: "SEC_DISTRIB" },
          { name: "SEC_ACTIVO" },
        ]
      },
    ]
  });
};
