const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CUENTA_PARAMETRO_ANIO', {
    COD_MAESTRO: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    VALOR_CADENA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    VALOR_NUMERICO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CUENTA_PARAMETRO_ANIO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CUENTA_PARAMETRO_ANIO",
        unique: true,
        fields: [
          { name: "COD_MAESTRO" },
          { name: "ANO_EJE" },
          { name: "MAYOR" },
          { name: "SUB_CTA" },
        ]
      },
    ]
  });
};
