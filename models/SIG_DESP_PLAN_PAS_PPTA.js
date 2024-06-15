const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DESP_PLAN_PAS_PPTA', {
    ANO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DESP_PLANILLA_PASAJE',
        key: 'SEC_ITEM_PLA_PAS'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DESP_PLANILLA_PASAJE',
        key: 'SEC_ITEM_PLA_PAS'
      }
    },
    SEC_ITEM_PLA_PAS: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DESP_PLANILLA_PASAJE',
        key: 'SEC_ITEM_PLA_PAS'
      }
    },
    TIPO_OPCION: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TIPO_PLAN_PAS: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    SEC_ITEM_PPTA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    FUENTE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    VALOR_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VALOR_SOL_EJE: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_MON_EJE: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_SOL_SAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_MON_SAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    FLAG_RES: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FUNCION: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    CATEG_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_PAGO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_RECURSO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_COMPROMISO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    act_proy: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    EXPEDIENTE: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    CICLO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FASE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SECUENCIA_EXPEDIENTE: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CORRELATIVO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_DESP_PLAN_PAS_PPTA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_DESP_PLAN_PAS_PPTA",
        unique: true,
        fields: [
          { name: "ANO_EJEC" },
          { name: "SEC_EJEC" },
          { name: "SEC_ITEM_PLA_PAS" },
          { name: "TIPO_OPCION" },
          { name: "TIPO_PLAN_PAS" },
          { name: "SEC_ITEM_PPTA" },
        ]
      },
    ]
  });
};
