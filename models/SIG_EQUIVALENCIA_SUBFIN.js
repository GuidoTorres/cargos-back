const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_EQUIVALENCIA_SUBFIN', {
    cod_producto: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    cod_finalidad: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'SIG_EQUIVALENCIA_SUBFIN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_sig_equivalencia_subfin",
        unique: true,
        fields: [
          { name: "cod_producto" },
          { name: "cod_finalidad" },
        ]
      },
    ]
  });
};
