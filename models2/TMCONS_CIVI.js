const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMCONS_CIVI', {
    ID_CONS_CIVI: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      primaryKey: true
    },
    TI_CONS_CIVI: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MO_JORN_BASI: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    MO_BONI_REUN: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'TMCONS_CIVI',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_ConstruccionCivil",
        unique: true,
        fields: [
          { name: "ID_CONS_CIVI" },
        ]
      },
    ]
  });
};
