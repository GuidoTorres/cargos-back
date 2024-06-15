const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DETALLE_MOVIM_PPTO', {
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
    SEC_PPTO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    OPERACION: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TIPO_DESTINO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MODAL_DESTINO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_RECURSO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CANT_ARTICULO: {
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
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_DETALLE_MOVIM_PPTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_DET_MOVIM_PPTO_01",
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
        name: "PK_SIG_DETALLE_MOVIM_PPTO",
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
          { name: "SEC_PPTO" },
        ]
      },
    ]
  });
};
