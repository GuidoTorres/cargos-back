const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DETALLE_ALMACEN_LOTES', {
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_MOVIM_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_MOVIM_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_MOVIM_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    SEC_ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_MOVIM_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_MOVIM_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_MOVIM_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_MOVIM_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_MOVIM_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_MOVIM_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    SEC_DETALLE: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DETALLE_MOVIM_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    SEC_LOTE: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_LOTE: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    FECHA_EXPIRACION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CANT_LOTE: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CANT_ATENDIDA: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
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
    },
    ESTADO_RECEP_ALM: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_EST_RECEP: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_GENERA_EA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_MOVIMTO_DEST: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    FECHA_PENALIDAD: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_DETALLE_ALMACEN_LOTES',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_DET_ALM_LOTE_01",
        fields: [
          { name: "SEC_DETALLE" },
          { name: "ANO_EJE" },
          { name: "sec_ejec" },
          { name: "ALMACEN" },
          { name: "SEC_ALMACEN" },
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
          { name: "NRO_MOVIMTO" },
          { name: "SECUENCIA" },
          { name: "TIPO_PPTO" },
        ]
      },
      {
        name: "PK_SIG_DETALLE_ALMACEN_LOTES",
        unique: true,
        fields: [
          { name: "sec_ejec" },
          { name: "ANO_EJE" },
          { name: "ALMACEN" },
          { name: "SEC_ALMACEN" },
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
          { name: "TIPO_PPTO" },
          { name: "NRO_MOVIMTO" },
          { name: "SECUENCIA" },
          { name: "SEC_DETALLE" },
          { name: "SEC_LOTE" },
        ]
      },
    ]
  });
};
