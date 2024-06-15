const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ACUMULADO_DET', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    MES_EJE: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    CATEG_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    GRUPO_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    MTOTAL_PIM: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    MTOTAL_PIM_EJEC: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    MTOTAL_CAL: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    MTOTAL_CAL_EJEC: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    MTOTAL_CAL_P: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    MTOTAL_CAL_PEJEC: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    FECHA_ING: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USUARIO_ING: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USUARIO_MOD: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    MTOTAL_RESER: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_ACUMULADO_DET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_ACUMULADO_DET",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
          { name: "MES_EJE" },
          { name: "CATEG_GASTO" },
          { name: "GRUPO_GASTO" },
          { name: "CLASIFICADOR" },
          { name: "SEC_FUNC" },
        ]
      },
    ]
  });
};
