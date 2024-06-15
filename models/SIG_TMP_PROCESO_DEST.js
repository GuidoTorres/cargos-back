const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TMP_PROCESO_DEST', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    PROCESO: {
      type: DataTypes.DECIMAL(20,0),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TMP_PROCESO_DEST',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIGTMPPRODES",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "PROCESO" },
        ]
      },
    ]
  });
};
