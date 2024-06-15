const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TES_CAJA', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    COD_CAJA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    NOM_CAJA: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    SEDE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    DIRECCION: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    REFERENCIA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_TES_CAJA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_TES_CAJA",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "COD_CAJA" },
        ]
      },
    ]
  });
};
