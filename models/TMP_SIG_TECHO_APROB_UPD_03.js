const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_SIG_TECHO_APROB_UPD_03', {
    correlativo: {
      autoIncrement: true,
      type: DataTypes.DECIMAL(20,0),
      allowNull: false,
      primaryKey: true
    },
    secuencia: {
      type: DataTypes.DECIMAL(8,0),
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
    categ_gasto: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    grupo_gasto: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    clasificador: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    valor_techo: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMP_SIG_TECHO_APROB_UPD_03',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TMP_TAU_03",
        unique: true,
        fields: [
          { name: "correlativo" },
        ]
      },
    ]
  });
};
