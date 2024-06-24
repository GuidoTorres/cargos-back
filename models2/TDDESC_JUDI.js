const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TDDESC_JUDI', {
    ID_PERS: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    ID_DETA: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      primaryKey: true
    },
    DE_RECE: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    MO_DESC: {
      type: DataTypes.DECIMAL(7,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TDDESC_JUDI',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TDDESC_JUDI",
        unique: true,
        fields: [
          { name: "ID_PERS" },
          { name: "ID_DETA" },
        ]
      },
    ]
  });
};
