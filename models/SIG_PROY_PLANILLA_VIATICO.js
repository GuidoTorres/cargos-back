const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PROY_PLANILLA_VIATICO', {
    ANO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROY_PLANILLA_PASAJE',
        key: 'SEC_ITEM_PLA_PAS'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROY_PLANILLA_PASAJE',
        key: 'SEC_ITEM_PLA_PAS'
      }
    },
    SEC_ITEM_PLA_PAS: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROY_PLANILLA_PASAJE',
        key: 'SEC_ITEM_PLA_PAS'
      }
    },
    SEC_ITEM_VIATICO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_DESTINO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true,
      references: {
        model: 'sig_proy_destino',
        key: 'SEC_DESTINO'
      }
    },
    TIPO_VIAJE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_INICIO_VIAJE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_FIN_VIAJE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_DIAS: {
      type: DataTypes.DECIMAL(4,2),
      allowNull: true
    },
    MONTO_DIARIO_VIATICO_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_STOTAL_VIATICO_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    OBSERVACION: {
      type: DataTypes.STRING(250),
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
      type: DataTypes.DECIMAL(16,4),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    MONTO_DIARIO_VIATICO_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONTO_STOTAL_VIATICO_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    TIPO_OPCION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    HORA_INICIO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    HORA_FIN: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    NRO_HORAS: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    hora_inicio_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hora_fin_dt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nro_minutos: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    fecini_viaje_reprog: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecfin_viaje_reprog: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hora_inicio_reprog: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    hora_fin_reprog: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    hora_inicio_dt_reprog: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hora_fin_dt_reprog: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PROY_PLANILLA_VIATICO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_PLANILLA_VIATICO",
        unique: true,
        fields: [
          { name: "ANO_EJEC" },
          { name: "SEC_EJEC" },
          { name: "SEC_ITEM_PLA_PAS" },
          { name: "SEC_ITEM_VIATICO" },
        ]
      },
    ]
  });
};
