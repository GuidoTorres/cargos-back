const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_SIG_CN_TECHO_APROBADO', {
    correlativo: {
      autoIncrement: true,
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true
    },
    secuencia: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
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
    sec_func: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    funcion: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    programa: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    valor_cn: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMP_SIG_CN_TECHO_APROBADO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TMP_TA1",
        unique: true,
        fields: [
          { name: "correlativo" },
        ]
      },
    ]
  });
};
