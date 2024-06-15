const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_proy_destino_cargo', {
    CARGO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_proy_cargo',
        key: 'CARGO'
      }
    },
    SEC_DESTINO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_proy_destino',
        key: 'SEC_DESTINO'
      }
    },
    MONTO_D_VIATICO_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    MONTO_D_VIATICO_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_proy_destino_cargo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__sig_proy_destino__30B9E879",
        unique: true,
        fields: [
          { name: "CARGO" },
          { name: "SEC_DESTINO" },
        ]
      },
    ]
  });
};
