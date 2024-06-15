const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_proy_cargo', {
    CARGO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true,
      references: {
        model: 'sig_proy_tipo_cargo',
        key: 'TIPO'
      }
    },
    NOMBRE: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MONTO_D_VIATICO_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    ABREVIATURA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    MONTO_D_VIATICO_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    GRUPO_OCUPACIONAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CATEGORIA_OCUPACIONAL: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FLAG_CARGO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_proy_cargo',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__sig_proy_cargo__19D68321",
        unique: true,
        fields: [
          { name: "CARGO" },
        ]
      },
    ]
  });
};
