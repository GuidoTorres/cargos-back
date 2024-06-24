const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMSIST', {
    CO_SIST: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    DE_SIST: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    AU_USER_CREA: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    AU_FECH_CREA: {
      type: DataTypes.DATE,
      allowNull: false
    },
    AU_USER_MODI: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    AU_FECH_MODI: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMSIST',
    schema: 'ADMI',
    timestamps: false,
    indexes: [
      {
        name: "PK__TMSIST__7735222C96D92182",
        unique: true,
        fields: [
          { name: "CO_SIST" },
        ]
      },
    ]
  });
};
