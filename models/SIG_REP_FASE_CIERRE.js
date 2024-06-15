const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_REP_FASE_CIERRE', {
    NRO_REP: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true
    },
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
    SEC_REP: {
      type: DataTypes.DECIMAL(18,0),
      allowNull: false,
      primaryKey: true
    },
    FASE: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false
    },
    TIPO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CATEG_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MONTO_PPTO: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    },
    MONTO_CN: {
      type: DataTypes.DECIMAL(18,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_REP_FASE_CIERRE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_REP_FASE_CIERRE",
        unique: true,
        fields: [
          { name: "NRO_REP" },
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_REP" },
        ]
      },
    ]
  });
};
