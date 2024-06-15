const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INT_HT_GASTO', {
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
    SUBFASE: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    SEC_HT: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FUENTE_FINANC_AGREGADA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_TRANSACCION: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    GENERICA: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    SUB_GENERICA: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    SUB_GENERICA_DET: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    ESPECIFICA: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    ESPECIFICA_DET: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    ID_CLASIFICADOR: {
      type: DataTypes.STRING(7),
      allowNull: false
    },
    MONTO_CN: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    ETAPA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_INT_HT_GASTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_HT_GASTO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SUBFASE" },
          { name: "SEC_HT" },
        ]
      },
    ]
  });
};
