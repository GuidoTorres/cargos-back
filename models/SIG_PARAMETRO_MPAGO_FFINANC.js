const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PARAMETRO_MPAGO_FFINANC', {
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
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    TIPO_PAGO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    TIPO_RECURSO: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    TIPO_COMPROMISO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_PARAMETRO_MPAGO_FFINANC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_parametro_mpago_ffinanc",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
        ]
      },
    ]
  });
};
