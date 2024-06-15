const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TIPO_B_CUENTA', {
    CODIGO_B: {
      type: DataTypes.STRING(2),
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
    }
  }, {
    sequelize,
    tableName: 'TIPO_B_CUENTA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TIPO_B_CUENTA",
        unique: true,
        fields: [
          { name: "CODIGO_B" },
          { name: "MAYOR" },
          { name: "SUB_CTA" },
        ]
      },
    ]
  });
};
