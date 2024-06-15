const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TIPO_SALIDA', {
    TIPO_SALIDA: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE_SALIDA: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      references: {
        model: 'SIG_TIPO_MOVIMIENTO',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'SIG_TIPO_MOVIMIENTO',
        key: 'TIPO_TRANSAC'
      }
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TIPO_SALIDA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_TIPO_SALIDA_01",
        fields: [
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
        ]
      },
      {
        name: "PK_SIG_TIPO_SALIDA",
        unique: true,
        fields: [
          { name: "TIPO_SALIDA" },
        ]
      },
    ]
  });
};
