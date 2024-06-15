const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_pat_equi_cuenta', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    mayor_old: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    sub_cta_old: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    mayor_new: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    sub_cta_new: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'sig_pat_equi_cuenta',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_sig_pat_equi_cuenta",
        unique: true,
        fields: [
          { name: "tipo" },
          { name: "mayor_old" },
          { name: "sub_cta_old" },
          { name: "mayor_new" },
          { name: "sub_cta_new" },
        ]
      },
    ]
  });
};
