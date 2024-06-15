const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DEVOLUCION_DET', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVOLUCION_CAB',
        key: 'SEC_EJEC'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVOLUCION_CAB',
        key: 'SEC_EJEC'
      }
    },
    SEC_DEVOLUCION: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVOLUCION_CAB',
        key: 'SEC_EJEC'
      }
    },
    CICLO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    FASE: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true
    },
    CORRELATIVO: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      primaryKey: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FECHA_DOC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MES_DEV: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.CHAR(5),
      allowNull: true
    },
    DEVOLUCION_MARCO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    SEC_ORDEN: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    SECUENCIA_OPERA: {
      type: DataTypes.DECIMAL(10,0),
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
    tableName: 'SIG_DEVOLUCION_DET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_DEV_DET",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_DEVOLUCION" },
          { name: "CICLO" },
          { name: "FASE" },
          { name: "SECUENCIA" },
          { name: "CORRELATIVO" },
        ]
      },
    ]
  });
};
