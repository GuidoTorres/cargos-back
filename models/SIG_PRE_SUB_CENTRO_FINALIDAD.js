const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PRE_SUB_CENTRO_FINALIDAD', {
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    nro_fase: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    sec_func_prop: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    SEC_ESTABLEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    SUBFINALIDAD: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    CADENA_FUNCIONAL: {
      type: DataTypes.STRING(34),
      allowNull: true
    },
    unidad_medida: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    ID_SUB_FINALIDAD: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_PRE_SUB_CENTRO_FINALIDAD',
    schema: 'dbo',
    timestamps: false
  });
};
