const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MARCA', {
    TIPO_MARCA: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    MARCA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_ALTA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_ACT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_BAJA: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MARCA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_MARCA",
        unique: true,
        fields: [
          { name: "TIPO_MARCA" },
          { name: "MARCA" },
        ]
      },
    ]
  });
};
