const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CERTIFICACION_DOC_SEC', {
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
    NRO_CERTIFICA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_META: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    ANO_PROC: {
      type: DataTypes.DECIMAL(4,0),
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
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    VALOR: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CERTIFICACION_DOC_SEC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_CERTIFICA_PAO_META_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_CERTIFICA" },
          { name: "SECUENCIA" },
        ]
      },
      {
        name: "PK_SIG_CERTIFICACION_DOC_SEC",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_CERTIFICA" },
          { name: "SECUENCIA" },
          { name: "SEC_META" },
        ]
      },
    ]
  });
};
