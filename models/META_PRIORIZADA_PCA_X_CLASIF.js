const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('META_PRIORIZADA_PCA_X_CLASIF', {
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
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: false,
      primaryKey: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_REGISTRO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    COD_ERROR: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    COD_MENSA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ESTADO_ENVIO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'META_PRIORIZADA_PCA_X_CLASIF',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_META_PRIORIZADA_PCA_X_CLASIF",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_FUNC" },
          { name: "FUENTE_FINANC" },
          { name: "ID_CLASIFICADOR" },
        ]
      },
    ]
  });
};
