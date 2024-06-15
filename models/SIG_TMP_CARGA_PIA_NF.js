const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TMP_CARGA_PIA_NF', {
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
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    PPTO_PIA: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_TMP_CARGA_PIA_NF',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_STCPNF",
        unique: true,
        fields: [
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
          { name: "SEC_FUNC" },
          { name: "CLASIFICADOR" },
        ]
      },
    ]
  });
};
