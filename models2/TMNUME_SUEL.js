const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMNUME_SUEL', {
    ID_PERS: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    NU_SUEL: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMNUME_SUEL',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_P_NroSueldos",
        unique: true,
        fields: [
          { name: "ID_PERS" },
        ]
      },
    ]
  });
};
