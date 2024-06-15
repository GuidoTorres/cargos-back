const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_SEGUIMIENTO_ESTADO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SEGUIMIENTO',
        key: 'TIPO_TRANSACCION'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SEGUIMIENTO',
        key: 'TIPO_TRANSACCION'
      }
    },
    TIPO_TRANSACCION: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SEGUIMIENTO',
        key: 'TIPO_TRANSACCION'
      }
    },
    NRO_ORIGEN: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SEGUIMIENTO',
        key: 'TIPO_TRANSACCION'
      }
    },
    SEC_ESTADO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    FECHA_ESTADO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO_SEGUIMIENTO: {
      type: DataTypes.CHAR(1),
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
    }
  }, {
    sequelize,
    tableName: 'SIG_SEGUIMIENTO_ESTADO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_S_SEG_E_01",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_TRANSACCION" },
          { name: "NRO_ORIGEN" },
          { name: "SEC_ESTADO" },
        ]
      },
    ]
  });
};
