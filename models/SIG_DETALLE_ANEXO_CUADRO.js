const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DETALLE_ANEXO_CUADRO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_BSERV_CUADRO',
        key: 'TIPO_BIEN'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_BSERV_CUADRO',
        key: 'TIPO_BIEN'
      }
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_BSERV_CUADRO',
        key: 'TIPO_BIEN'
      }
    },
    SEC_CUADRO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_BSERV_CUADRO',
        key: 'TIPO_BIEN'
      }
    },
    SECUENCIA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_BSERV_CUADRO',
        key: 'TIPO_BIEN'
      }
    },
    SEC_ANEXO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_REQUER: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ANEXO_ITEM: {
      type: DataTypes.TEXT,
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
    tableName: 'SIG_DETALLE_ANEXO_CUADRO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_DETALLE_ANEXO_CUADRO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "SEC_CUADRO" },
          { name: "SECUENCIA" },
          { name: "SEC_ANEXO" },
        ]
      },
    ]
  });
};
