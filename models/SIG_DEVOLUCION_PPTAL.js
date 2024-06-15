const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DEVOLUCION_PPTAL', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVOLUCION_DET',
        key: 'SECUENCIA'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVOLUCION_DET',
        key: 'SECUENCIA'
      }
    },
    SEC_DEVOLUCION: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVOLUCION_DET',
        key: 'SECUENCIA'
      }
    },
    CICLO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVOLUCION_DET',
        key: 'SECUENCIA'
      }
    },
    FASE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVOLUCION_DET',
        key: 'SECUENCIA'
      }
    },
    SECUENCIA: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVOLUCION_DET',
        key: 'SECUENCIA'
      }
    },
    CORRELATIVO: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVOLUCION_DET',
        key: 'SECUENCIA'
      }
    },
    SEC_PPTAL: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    FUENTE_FINANC: {
      type: DataTypes.CHAR(2),
      allowNull: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.CHAR(20),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.CHAR(15),
      allowNull: true
    },
    MONTO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_DEVOLUCION_PPTAL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_DEV_PPTAL",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_DEVOLUCION" },
          { name: "CICLO" },
          { name: "FASE" },
          { name: "SECUENCIA" },
          { name: "CORRELATIVO" },
          { name: "SEC_PPTAL" },
        ]
      },
    ]
  });
};
