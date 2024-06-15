const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SEG_ROL_PAGINA_PRIVILEGIO', {
    PRIVILEGIO: {
      type: DataTypes.DECIMAL(38,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    ROL: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    PAGINA: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SEG_ROL_PAGINA_PRIVILEGIO',
    schema: 'dbo',
    timestamps: false
  });
};
