const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_MSG_ALERTA', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MSG_TIPO',
        key: 'SEC_TIPO'
      }
    },
    SEC_MODULO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MSG_TIPO',
        key: 'SEC_TIPO'
      }
    },
    SEC_GRUPO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MSG_GRUPO',
        key: 'SEC_MODULO'
      }
    },
    SEC_ALERTA: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: false,
      primaryKey: true
    },
    COD_ALERTA: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    SEC_TIPO_ACTIVA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'SIG_MSG_ACTIVA',
        key: 'SEC_TIPO_ACTIVA'
      }
    },
    SEC_TIPO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'SIG_MSG_TIPO',
        key: 'SEC_TIPO'
      }
    },
    MENSAJE: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    TIEMPO_ANTICIPA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false
    },
    UNIDAD_ANTICIPA: {
      type: DataTypes.STRING(1),
      allowNull: false
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
    tableName: 'SIG_MSG_ALERTA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_MSG_ALERTA",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SEC_MODULO" },
          { name: "SEC_GRUPO" },
          { name: "SEC_ALERTA" },
        ]
      },
    ]
  });
};
