const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_META_PROPUESTA', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_tarea',
        key: 'tipo_tarea'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_tarea',
        key: 'tipo_tarea'
      }
    },
    SEC_FUNC_PROP: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    FASE_CUADRO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    FUNCION: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    SUB_PROGRAMA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    META: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FINALIDAD: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    NOMBRE: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    MONTO: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,3),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    DEPARTAMENTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROVINCIA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DISTRITO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PORC_META: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    FLAG_ACT_PROY: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_ESTRATEGIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTRATEGIA_NACIONAL: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    TIPO_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      references: {
        model: 'sig_tarea',
        key: 'tipo_tarea'
      }
    },
    NIVEL_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      references: {
        model: 'sig_tarea',
        key: 'tipo_tarea'
      }
    },
    TAREA_GENERAL: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true,
      references: {
        model: 'sig_tarea',
        key: 'tipo_tarea'
      }
    },
    SEC_FUNC_REQ: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    TIPO_ESTRATEGIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PROGRAMA_INSTITUCIONAL: {
      type: DataTypes.STRING(6),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_META_PROPUESTA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_META_PROPUESTA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_FUNC_PROP" },
          { name: "FASE_CUADRO" },
        ]
      },
    ]
  });
};
