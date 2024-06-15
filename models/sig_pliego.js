const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_pliego', {
    sector: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pliego',
        key: 'sector'
      }
    },
    pliego: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pliego',
        key: 'sector'
      }
    },
    estado: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    fecha_reg: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_pliego',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_SIG_PLIEGO",
        unique: true,
        fields: [
          { name: "sector" },
          { name: "pliego" },
        ]
      },
      {
        name: "pk_sig_pliego",
        unique: true,
        fields: [
          { name: "sector" },
          { name: "pliego" },
        ]
      },
    ]
  });
};
