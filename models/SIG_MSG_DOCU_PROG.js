const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MSG_DOCU_PROG', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MSG_PROGRAMA',
        key: 'SEC_PROGRAMA'
      }
    },
    SEC_MODULO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MSG_PROGRAMA',
        key: 'SEC_PROGRAMA'
      }
    },
    SEC_GRUPO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MSG_PROGRAMA',
        key: 'SEC_PROGRAMA'
      }
    },
    SEC_ALERTA: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MSG_PROGRAMA',
        key: 'SEC_PROGRAMA'
      }
    },
    SEC_PROGRAMA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MSG_PROGRAMA',
        key: 'SEC_PROGRAMA'
      }
    },
    SEC_PROG: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SEC_DOCUMENTO: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: true,
      references: {
        model: 'SIG_MSG_DOCUMENTO',
        key: 'SEC_MODULO'
      }
    },
    ESTADO: {
      type: DataTypes.STRING(20),
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
    tableName: 'SIG_MSG_DOCU_PROG',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_MSG_DOCU_PROG",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SEC_MODULO" },
          { name: "SEC_GRUPO" },
          { name: "SEC_ALERTA" },
          { name: "SEC_PROGRAMA" },
          { name: "SEC_PROG" },
        ]
      },
    ]
  });
};
