const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MSG_DESTINATARIO', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MSG_ALERTA',
        key: 'SEC_MODULO'
      }
    },
    SEC_MODULO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MSG_ALERTA',
        key: 'SEC_MODULO'
      }
    },
    SEC_GRUPO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MSG_ALERTA',
        key: 'SEC_MODULO'
      }
    },
    SEC_ALERTA: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MSG_ALERTA',
        key: 'SEC_MODULO'
      }
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    CORREO: {
      type: DataTypes.STRING(250),
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
    tableName: 'SIG_MSG_DESTINATARIO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_MSG_DESTINATARIO",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SEC_MODULO" },
          { name: "SEC_GRUPO" },
          { name: "SEC_ALERTA" },
          { name: "EMPLEADO" },
        ]
      },
    ]
  });
};
