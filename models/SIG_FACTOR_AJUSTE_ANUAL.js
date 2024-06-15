const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_FACTOR_AJUSTE_ANUAL', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    FACTOR_ANUAL: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    FACTOR_PROM: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    }
  }, {
    sequelize,
    tableName: 'SIG_FACTOR_AJUSTE_ANUAL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_FACTOR_AJUSTE_ANUAL",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
        ]
      },
    ]
  });
};
