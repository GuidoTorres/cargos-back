const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INM_IF', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_INVENTARIO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE_INVENTARIO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHA_INVENTARIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    RESOLUCION: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_INM_IF',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_INM_IF",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_INVENTARIO" },
        ]
      },
    ]
  });
};
