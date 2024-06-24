const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMCARG', {
    CO_CARG: {
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    DE_CARG: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    MO_CARG: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    ES_AFEC: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    MO_AFEC: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    },
    TI_CARG: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    IN_ASIG_FAMI: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMCARG',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Cargos",
        unique: true,
        fields: [
          { name: "CO_CARG" },
        ]
      },
    ]
  });
};
