const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMSECT', {
    ID_SECT: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true
    },
    DE_SECT: {
      type: DataTypes.STRING(25),
      allowNull: false
    },
    NU_PORC: {
      type: DataTypes.SMALLINT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMSECT',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TB_Sectores",
        unique: true,
        fields: [
          { name: "ID_SECT" },
        ]
      },
    ]
  });
};
