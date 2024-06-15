const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_tmp_migracion_metas', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    secuencial: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    adescripcion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    nreg: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    nreg_proc: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_tmp_migracion_metas',
    schema: 'dbo',
    timestamps: false
  });
};
