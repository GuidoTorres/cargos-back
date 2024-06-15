const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PLAN_CTB_MBELICO', {
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
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    MONTO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'SIG_PLAN_CTB_MBELICO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_PLAN_CTB_MBELICO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "MAYOR" },
          { name: "SUB_CTA" },
        ]
      },
    ]
  });
};
