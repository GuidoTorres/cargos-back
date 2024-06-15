const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_SUBFIN_XLS', {
    SUB_FINALIDAD: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    NOMBRE_OLD: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMP_SUBFIN_XLS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__TMP_SUBFIN_XLS__3A8349D5",
        unique: true,
        fields: [
          { name: "SUB_FINALIDAD" },
        ]
      },
    ]
  });
};
