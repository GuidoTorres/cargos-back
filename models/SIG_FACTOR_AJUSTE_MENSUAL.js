const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_FACTOR_AJUSTE_MENSUAL', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_FACTOR_AJUSTE_ANUAL',
        key: 'ANO_EJE'
      }
    },
    MES_EJE: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    IPM_MENSUAL: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    FACTOR_MEN_REF: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    FACTOR_AJU_CIE: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    }
  }, {
    sequelize,
    tableName: 'SIG_FACTOR_AJUSTE_MENSUAL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_FACTOR_AJUSTE_MENSUAL",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "MES_EJE" },
        ]
      },
    ]
  });
};
