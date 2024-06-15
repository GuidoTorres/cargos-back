const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MSG_ACTIVA', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MSG_MODULO',
        key: 'SEC_MODULO'
      }
    },
    SEC_MODULO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MSG_MODULO',
        key: 'SEC_MODULO'
      }
    },
    SEC_TIPO_ACTIVA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    COD_TIPO_ACTIVA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NOMBRE_ACTIVA: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    USER_REG: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USER_ACT: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_ACT: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_MSG_ACTIVA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_MSG_ACTIVA",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SEC_MODULO" },
          { name: "SEC_TIPO_ACTIVA" },
        ]
      },
    ]
  });
};
