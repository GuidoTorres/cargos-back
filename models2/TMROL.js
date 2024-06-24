const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMROL', {
    CO_ROL: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    RO_DESC: {
      type: DataTypes.STRING(200),
      allowNull: true
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
    tableName: 'TMROL',
    schema: 'ADMI',
    timestamps: false,
    indexes: [
      {
        name: "PK__TMROL__D06EB452E461AE9E",
        unique: true,
        fields: [
          { name: "CO_ROL" },
        ]
      },
    ]
  });
};
