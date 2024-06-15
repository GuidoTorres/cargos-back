const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TIPO_MOVIMIENTO', {
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE_MOVIMTO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ABREV_MOVIMTO: {
      type: DataTypes.STRING(25),
      allowNull: true
    },
    IND_ALMACEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IND_ACTIVO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IND_SALIDA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IND_SBN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CONDICION_SBN: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TIPO_MOVIMIENTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TIPO_MOVIMIENTO",
        unique: true,
        fields: [
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
        ]
      },
    ]
  });
};
