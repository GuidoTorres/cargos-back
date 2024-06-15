const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TRANS_PROGRA_HOR', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    HORA: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_TRANS_PROGRA_HOR',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TRANS_PROGRA_HOR",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO" },
          { name: "HORA" },
        ]
      },
    ]
  });
};
