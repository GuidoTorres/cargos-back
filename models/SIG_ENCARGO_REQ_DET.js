const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ENCARGO_REQ_DET', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ENCARGO_REQ',
        key: 'SEC_ENCARGO_REQ'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ENCARGO_REQ',
        key: 'SEC_ENCARGO_REQ'
      }
    },
    SEC_ENCARGO_REQ: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ENCARGO_REQ',
        key: 'SEC_ENCARGO_REQ'
      }
    },
    SEC_ENCARGO_REQ_DET: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'SIG_CLASIFICADOR_GASTO',
        key: 'CLASIFICADOR'
      }
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GLOSA: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    MONTO: {
      type: DataTypes.DECIMAL(16,2),
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
    SEC_CUADRO: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: true
    },
    estado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_ENCARGO_REQ_DET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_ENCARGO_REQ_DET",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_ENCARGO_REQ" },
          { name: "SEC_ENCARGO_REQ_DET" },
        ]
      },
    ]
  });
};
