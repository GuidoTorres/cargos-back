const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DET_CAUSAL_ALTA', {
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_ALTA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CAUSAL_ALTA',
        key: 'CODIGO_ALTA'
      }
    }
  }, {
    sequelize,
    tableName: 'SIG_DET_CAUSAL_ALTA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DET_SIG_CAUSAL_ALTA",
        unique: true,
        fields: [
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
          { name: "CODIGO_ALTA" },
        ]
      },
    ]
  });
};
