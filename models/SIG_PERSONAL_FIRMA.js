const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PERSONAL_FIRMA', {
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_personal',
        key: 'sec_ejec'
      }
    },
    empleado: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_personal',
        key: 'sec_ejec'
      }
    },
    firma: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PERSONAL_FIRMA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_PERSONAL_FIRMA",
        unique: true,
        fields: [
          { name: "sec_ejec" },
          { name: "empleado" },
        ]
      },
      {
        name: "PK_SIG_PERSONAL_FIRMA",
        unique: true,
        fields: [
          { name: "sec_ejec" },
          { name: "empleado" },
        ]
      },
    ]
  });
};
