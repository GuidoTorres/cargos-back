const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CONTROL_TRANSACCION', {
    control_id: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: false,
      primaryKey: true
    },
    transaccion_id: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: false
    },
    archivo: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fecha_modificacion: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'CONTROL_TRANSACCION',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_control_transaccion",
        unique: true,
        fields: [
          { name: "control_id" },
        ]
      },
    ]
  });
};
