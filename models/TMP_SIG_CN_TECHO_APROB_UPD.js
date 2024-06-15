const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_SIG_CN_TECHO_APROB_UPD', {
    correlativo: {
      autoIncrement: true,
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true
    },
    centro_costo: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    origen: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fuente_financ: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    fuente_impto: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    clasificador: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    sec_func: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    valor_cn1: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    valor_cn2: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMP_SIG_CN_TECHO_APROB_UPD',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TMP_TAU1",
        unique: true,
        fields: [
          { name: "correlativo" },
        ]
      },
    ]
  });
};
