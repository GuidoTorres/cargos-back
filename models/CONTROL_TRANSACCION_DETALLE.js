const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CONTROL_TRANSACCION_DETALLE', {
    control_detalle_id: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: false,
      primaryKey: true
    },
    control_id: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: false,
      references: {
        model: 'CONTROL_TRANSACCION',
        key: 'control_id'
      }
    },
    detalle_id: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: false
    },
    campo_origen: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    valor: {
      type: DataTypes.STRING(250),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'CONTROL_TRANSACCION_DETALLE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_control_transaccion_detalle",
        unique: true,
        fields: [
          { name: "control_detalle_id" },
        ]
      },
    ]
  });
};
