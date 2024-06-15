const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_USUARIO_CAJA_CHICA', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_CAJA_CHICA',
        key: 'SEC_EJEC'
      }
    },
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
        model: 'SIG_TES_CAJA_CHICA',
        key: 'SEC_EJEC'
      }
    },
    SEC_CAJA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_TES_CAJA_CHICA',
        key: 'SEC_EJEC'
      }
    },
    COD_CAJA: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
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
    tableName: 'SIG_USUARIO_CAJA_CHICA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_USUARIO_CAJA_CHICA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "CUSER_ID" },
          { name: "SEC_EJEC" },
          { name: "SEC_CAJA" },
          { name: "COD_CAJA" },
        ]
      },
    ]
  });
};
