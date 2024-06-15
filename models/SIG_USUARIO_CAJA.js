const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_USUARIO_CAJA', {
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_CAJA',
        key: 'SEC_EJEC'
      }
    },
    COD_CAJA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_CAJA',
        key: 'SEC_EJEC'
      }
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_USUARIO_CAJA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_USUARIO_CAJA",
        unique: true,
        fields: [
          { name: "CUSER_ID" },
          { name: "SEC_EJEC" },
          { name: "COD_CAJA" },
        ]
      },
    ]
  });
};
