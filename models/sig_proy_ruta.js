const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_proy_ruta', {
    D_SEC_DESTINO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_proy_destino',
        key: 'SEC_DESTINO'
      }
    },
    O_SEC_DESTINO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_proy_destino',
        key: 'SEC_DESTINO'
      }
    },
    TARIFA_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TARIFA_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(15),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_proy_ruta',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__sig_proy_ruta__1605F23D",
        unique: true,
        fields: [
          { name: "D_SEC_DESTINO" },
          { name: "O_SEC_DESTINO" },
        ]
      },
    ]
  });
};
