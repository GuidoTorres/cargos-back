const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_proy_comi_destino', {
    ANO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_proy_comi',
        key: 'SEC_PEDIDO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_proy_comi',
        key: 'SEC_PEDIDO'
      }
    },
    SEC_PEDIDO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_proy_comi',
        key: 'SEC_PEDIDO'
      }
    },
    SEC_ITEM_COMI: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_proy_comi',
        key: 'SEC_PEDIDO'
      }
    },
    SEC_ITEM_DESTINO: {
      type: DataTypes.DECIMAL(3,0),
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
    FECHA_INICIO_VIAJE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_FIN_VIAJE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_DIAS: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    TIPO_VIAJE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    O_SEC_DESTINO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    observacion_o: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    observacion_d: {
      type: DataTypes.STRING(250),
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
    }
  }, {
    sequelize,
    tableName: 'sig_proy_comi_destino',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__sig_proy_comi_de__27307E3F",
        unique: true,
        fields: [
          { name: "ANO_EJEC" },
          { name: "SEC_EJEC" },
          { name: "SEC_PEDIDO" },
          { name: "SEC_ITEM_COMI" },
          { name: "SEC_ITEM_DESTINO" },
        ]
      },
    ]
  });
};
