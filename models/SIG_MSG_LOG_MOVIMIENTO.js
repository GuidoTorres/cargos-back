const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MSG_LOG_MOVIMIENTO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_LOG_MOV: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true,
      references: {
        model: 'SIG_MSG_DOCUMENTO',
        key: 'SEC_MODULO'
      }
    },
    SEC_MODULO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'SIG_MSG_DOCUMENTO',
        key: 'SEC_MODULO'
      }
    },
    SEC_GRUPO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true,
      references: {
        model: 'SIG_MSG_DOCUMENTO',
        key: 'SEC_MODULO'
      }
    },
    SEC_ALERTA: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: true,
      references: {
        model: 'SIG_MSG_DOCUMENTO',
        key: 'SEC_MODULO'
      }
    },
    SEC_PROGRAMA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'SIG_MSG_DOCU_PROG',
        key: 'SEC_PROGRAMA'
      }
    },
    SEC_PROG: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'SIG_MSG_DOCU_PROG',
        key: 'SEC_PROGRAMA'
      }
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'SIG_MSG_DOCU_DESTINO',
        key: 'SEC_MODULO'
      }
    },
    SEC_DESTINO: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'SIG_MSG_DOCU_DESTINO',
        key: 'SEC_MODULO'
      }
    },
    SEC_DOCUMENTO: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: true,
      references: {
        model: 'SIG_MSG_DOCUMENTO',
        key: 'SEC_MODULO'
      }
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FECHA_ENVIO: {
      type: DataTypes.DATE,
      allowNull: false
    },
    HORA_ENVIO: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CODIGO_ERROR: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false
    },
    MENSAJE_ERROR: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    FECHA_PAGO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIEMPO_ALERTA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FLAG_ENVIO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    USER_REG: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    HORA: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TIPO_DOCUMENTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_CARTA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    NRO_DOCUMENTO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ESTADO_G: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_FINAL: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_MSG_LOG_MOVIMIENTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_MSG_LOG_MOVIMIENTO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_LOG_MOV" },
        ]
      },
    ]
  });
};
