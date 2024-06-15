const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_concurrencia_interfase_web', {
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    tipo_intf: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tiempo: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    usuario: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_concurrencia_interfase_web',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_sig_concurr_interfase_web",
        unique: true,
        fields: [
          { name: "sec_ejec" },
          { name: "tipo_intf" },
        ]
      },
    ]
  });
};
