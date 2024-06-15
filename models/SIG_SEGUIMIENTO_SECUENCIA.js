const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_SEGUIMIENTO_SECUENCIA', {
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
    TIPO_TRANSACCION_DESTINO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_DESTINO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'SIG_SEGUIMIENTO_SECUENCIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_S_SEG_S_01",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_TRANSACCION" },
          { name: "NRO_ORIGEN" },
          { name: "TIPO_TRANSACCION_DESTINO" },
          { name: "NRO_DESTINO" },
        ]
      },
    ]
  });
};
