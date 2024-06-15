const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MSG_DOCU_DESTINO', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MSG_DOCUMENTO',
        key: 'SEC_MODULO'
      }
    },
    SEC_MODULO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MSG_DOCUMENTO',
        key: 'SEC_MODULO'
      }
    },
    SEC_GRUPO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MSG_DOCUMENTO',
        key: 'SEC_MODULO'
      }
    },
    SEC_ALERTA: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MSG_DOCUMENTO',
        key: 'SEC_MODULO'
      }
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MSG_DESTINATARIO',
        key: 'SEC_MODULO'
      }
    },
    SEC_DESTINO: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SEC_DOCUMENTO: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false,
      references: {
        model: 'SIG_MSG_DOCUMENTO',
        key: 'SEC_MODULO'
      }
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    USER_REG: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: false
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
    tableName: 'SIG_MSG_DOCU_DESTINO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_MSG_DOCU_DESTINO",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SEC_MODULO" },
          { name: "SEC_GRUPO" },
          { name: "SEC_ALERTA" },
          { name: "EMPLEADO" },
          { name: "SEC_DESTINO" },
        ]
      },
    ]
  });
};
