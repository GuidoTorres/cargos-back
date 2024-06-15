const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_planilla_concepto_cpago', {
    cod_concepto: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    cod_comp_pago: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sig_planilla_concepto_cpago',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_planilla_concepto_cpago",
        unique: true,
        fields: [
          { name: "cod_concepto" },
          { name: "cod_comp_pago" },
        ]
      },
    ]
  });
};
