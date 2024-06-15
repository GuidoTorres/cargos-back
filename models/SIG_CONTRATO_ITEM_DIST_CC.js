const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONTRATO_ITEM_DIST_CC', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM_DIST',
        key: 'TIPO_CONTRATO'
      }
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM_DIST',
        key: 'TIPO_CONTRATO'
      }
    },
    TIPO_CONTRATO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM_DIST',
        key: 'TIPO_CONTRATO'
      }
    },
    NRO_CONTRATO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM_DIST',
        key: 'TIPO_CONTRATO'
      }
    },
    NRO_ITEM: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM_DIST',
        key: 'TIPO_CONTRATO'
      }
    },
    ANO_PROGRAMACION: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM_DIST',
        key: 'TIPO_CONTRATO'
      }
    },
    FASE_CUADRO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM_DIST',
        key: 'TIPO_CONTRATO'
      }
    },
    SEC_ITEM_DIST: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM_DIST',
        key: 'TIPO_CONTRATO'
      }
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    TIPO_TAREA: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    NIVEL_TAREA: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TAREA_GENERAL: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    VALOR: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: false
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CONTRATO_ITEM_DIST_CC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CONTRATO_ITEM_DIST_CC",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "TIPO_CONTRATO" },
          { name: "NRO_CONTRATO" },
          { name: "NRO_ITEM" },
          { name: "ANO_PROGRAMACION" },
          { name: "FASE_CUADRO" },
          { name: "SEC_ITEM_DIST" },
          { name: "CENTRO_COSTO" },
          { name: "TIPO_TAREA" },
          { name: "NIVEL_TAREA" },
          { name: "TAREA_GENERAL" },
        ]
      },
    ]
  });
};
