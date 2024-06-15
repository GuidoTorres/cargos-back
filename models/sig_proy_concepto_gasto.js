const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_proy_concepto_gasto', {
    ANO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    CONCEPTO_GASTO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    FLAG_VIATICO_PASAJE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ABREVIATURA: {
      type: DataTypes.STRING(50),
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
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_proy_concepto_gasto',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__sig_proy_concept__2B010F23",
        unique: true,
        fields: [
          { name: "ANO_EJEC" },
          { name: "SEC_EJEC" },
          { name: "CONCEPTO_GASTO" },
        ]
      },
    ]
  });
};
