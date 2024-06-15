const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ENCARGO_ITEM_ANEXO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ENCARGO_REQ_ITEM',
        key: 'SEC_ENCARGO_REQ_ITEM'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ENCARGO_REQ_ITEM',
        key: 'SEC_ENCARGO_REQ_ITEM'
      }
    },
    SEC_ENCARGO_REQ: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ENCARGO_REQ_ITEM',
        key: 'SEC_ENCARGO_REQ_ITEM'
      }
    },
    SEC_ENCARGO_REQ_DET: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ENCARGO_REQ_ITEM',
        key: 'SEC_ENCARGO_REQ_ITEM'
      }
    },
    SEC_ENCARGO_REQ_ITEM: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ENCARGO_REQ_ITEM',
        key: 'SEC_ENCARGO_REQ_ITEM'
      }
    },
    SEC_ANEXO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_REQUER: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ANEXO_ITEM: {
      type: DataTypes.STRING(360),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_ENCARGO_ITEM_ANEXO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_S_E_I_A_01",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_ENCARGO_REQ" },
          { name: "SEC_ENCARGO_REQ_DET" },
          { name: "SEC_ENCARGO_REQ_ITEM" },
          { name: "SEC_ANEXO" },
        ]
      },
    ]
  });
};
