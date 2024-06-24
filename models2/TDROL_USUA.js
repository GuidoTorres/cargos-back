const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TDROL_USUA', {
    CO_ROL_USUA: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    CO_ROL: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TMROL',
        key: 'CO_ROL'
      }
    },
    CO_USUA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'TMUSUA',
        key: 'CO_USUA'
      }
    }
  }, {
    sequelize,
    tableName: 'TDROL_USUA',
    schema: 'ADMI',
    timestamps: false,
    indexes: [
      {
        name: "PK__TDROL_US__0531C80A09CECF26",
        unique: true,
        fields: [
          { name: "CO_ROL_USUA" },
        ]
      },
    ]
  });
};
