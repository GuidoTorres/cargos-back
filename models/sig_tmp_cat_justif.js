const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_tmp_cat_justif', {
    tipo_bien: {
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    grupo_bien: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    clase_bien: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    familia_bien: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    item_bien: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    justificacion: {
      type: DataTypes.STRING(250),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sig_tmp_cat_justif',
    schema: 'dbo',
    timestamps: false
  });
};
