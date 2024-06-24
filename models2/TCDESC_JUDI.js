const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TCDESC_JUDI', {
    ID_PERS: {
      type: DataTypes.CHAR(6),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TMPERS',
        key: 'ID_PERS'
      }
    }
  }, {
    sequelize,
    tableName: 'TCDESC_JUDI',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TCDESC_JUDI",
        unique: true,
        fields: [
          { name: "ID_PERS" },
        ]
      },
    ]
  });
};
