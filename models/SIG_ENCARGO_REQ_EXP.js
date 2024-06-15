const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ENCARGO_REQ_EXP', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ENCARGO_REQ_ITEM',
        key: 'SEC_ENCARGO_REQ_ITEM'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ENCARGO_REQ_ITEM',
        key: 'SEC_ENCARGO_REQ_ITEM'
      }
    },
    SEC_ENCARGO_REQ: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ENCARGO_REQ_ITEM',
        key: 'SEC_ENCARGO_REQ_ITEM'
      }
    },
    SEC_ENCARGO_REQ_DET: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ENCARGO_REQ_ITEM',
        key: 'SEC_ENCARGO_REQ_ITEM'
      }
    },
    SEC_ENCARGO_REQ_ITEM: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ENCARGO_REQ_ITEM',
        key: 'SEC_ENCARGO_REQ_ITEM'
      }
    },
    NRO_ENCARGO_REQ_EXP: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    MES_EJE: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    EXPEDIENTE: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    CICLO: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    FASE: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    SECUENCIA: {
      type: DataTypes.CHAR(4),
      allowNull: false
    },
    CORRELATIVO: {
      type: DataTypes.CHAR(4),
      allowNull: false
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    FUNCION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    ORIGEN: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FUENTE_FINANC: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    TIPO_PAGO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_RECURSO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_COMPROMISO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    GLOSA: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FLAG_ENVIO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    MONTO_ENCARGO: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
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
    },
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_ENCARGO_REQ_EXP',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_ENCARGO_REQ_EXP",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_ENCARGO_REQ" },
          { name: "SEC_ENCARGO_REQ_DET" },
          { name: "SEC_ENCARGO_REQ_ITEM" },
          { name: "NRO_ENCARGO_REQ_EXP" },
        ]
      },
    ]
  });
};
