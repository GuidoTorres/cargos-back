const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_PLANTILLA_OBSERV', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_OBSERV: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    SEC_OBSERV: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    DES_OBSERV: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_PLANTILLA_OBSERV',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TES_PLANTILLA_OBSERV",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_OBSERV" },
          { name: "SEC_OBSERV" },
        ]
      },
    ]
  });
};
