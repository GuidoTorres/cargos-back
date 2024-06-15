const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INT_LOG', {
    NUM_ID: {
      type: DataTypes.DECIMAL(14,0),
      allowNull: false,
      primaryKey: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false
    },
    SEC_AUD: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    MENSAJE: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    FECHA: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'SIG_INT_LOG',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_INT_LOG",
        unique: true,
        fields: [
          { name: "NUM_ID" },
        ]
      },
    ]
  });
};
