const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TDACCE_ROL', {
    CO_ACCE_ROL: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CO_ACCE: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TMACCE',
        key: 'CO_ACCE'
      }
    },
    CO_ROL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TMROL',
        key: 'CO_ROL'
      }
    }
  }, {
    sequelize,
    tableName: 'TDACCE_ROL',
    schema: 'ADMI',
    timestamps: false,
    indexes: [
      {
        name: "PK__TDACCE_R__53335D4688246557",
        unique: true,
        fields: [
          { name: "CO_ACCE_ROL" },
        ]
      },
    ]
  });
};
