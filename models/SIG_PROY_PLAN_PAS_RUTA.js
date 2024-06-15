const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PROY_PLAN_PAS_RUTA', {
    ANO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROY_PLAN_PAS_DESTINO',
        key: 'TIPO_OPCION'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROY_PLAN_PAS_DESTINO',
        key: 'TIPO_OPCION'
      }
    },
    SEC_ITEM_PLA_PAS: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROY_PLAN_PAS_DESTINO',
        key: 'TIPO_OPCION'
      }
    },
    SEC_ITEM_DESTINO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROY_PLAN_PAS_DESTINO',
        key: 'TIPO_OPCION'
      }
    },
    TIPO_OPCION: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROY_PLAN_PAS_DESTINO',
        key: 'TIPO_OPCION'
      }
    },
    SEC_ITEM_RUTA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    D_SEC_DESTINO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true,
      references: {
        model: 'sig_proy_ruta',
        key: 'O_SEC_DESTINO'
      }
    },
    O_SEC_DESTINO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true,
      references: {
        model: 'sig_proy_ruta',
        key: 'O_SEC_DESTINO'
      }
    },
    OBSERVACION: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    FECHA_INICIO_PARTIDA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_FIN_LLEGADA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PASAJE_RUTA_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    TIPO_RUTA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PASAJE_RUTA_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PROY_PLAN_PAS_RUTA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PLANILLA_RUTA",
        unique: true,
        fields: [
          { name: "ANO_EJEC" },
          { name: "SEC_EJEC" },
          { name: "SEC_ITEM_PLA_PAS" },
          { name: "SEC_ITEM_DESTINO" },
          { name: "TIPO_OPCION" },
          { name: "SEC_ITEM_RUTA" },
        ]
      },
    ]
  });
};
