const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CONTROL_TRANSACCION_DESTINO', {
    control_destino_id: {
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
    casilla: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'CONTROL_TRANSACCION_DESTINO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_control_transaccion_destino",
        unique: true,
        fields: [
          { name: "control_destino_id" },
        ]
      },
    ]
  });
};
