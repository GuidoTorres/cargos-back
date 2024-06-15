const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_GUIA_REMISION_DET', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_GUIA_REMISION',
        key: 'TIPO_DOCUMENTO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_GUIA_REMISION',
        key: 'TIPO_DOCUMENTO'
      }
    },
    ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_GUIA_REMISION',
        key: 'TIPO_DOCUMENTO'
      }
    },
    SEC_ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_GUIA_REMISION',
        key: 'TIPO_DOCUMENTO'
      }
    },
    TIPO_DOCUMENTO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_GUIA_REMISION',
        key: 'TIPO_DOCUMENTO'
      }
    },
    SERIE: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_GUIA_REMISION',
        key: 'TIPO_DOCUMENTO'
      }
    },
    SEC_GUIA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_GUIA_REMISION',
        key: 'TIPO_DOCUMENTO'
      }
    },
    SEC_GUIA_ITEM: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_PEDIDO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NRO_PEDIDO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    SEC_ATENCION: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    CANT_PECOSA: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: 0
    },
    CANT_TRANSPORTE: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: 0
    },
    PESO: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: 0
    },
    PESO_TOTAL: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: true,
      defaultValue: 0
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
    tableName: 'SIG_GUIA_REMISION_DET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_GUIA_REM_DET",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ALMACEN" },
          { name: "SEC_ALMACEN" },
          { name: "TIPO_DOCUMENTO" },
          { name: "SERIE" },
          { name: "SEC_GUIA" },
          { name: "SEC_GUIA_ITEM" },
        ]
      },
    ]
  });
};
