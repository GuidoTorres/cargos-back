const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DETALLE_ITEM_ALMACEN', {
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    SEC_ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_ALMACEN',
        key: 'TIPO_TRANSAC'
      }
    },
    SEC_ITEM: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    MARCA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    ACTIVO_FIJO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CANT_ADQUIRIDO: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MEDIDA_ADQUIS: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CANT_RECIBIDO: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CANT_ARTICULO: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    PRECIO_UNIT: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_TOTAL: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRESENTACION: {
      type: DataTypes.DECIMAL(5,0),
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
    },
    TIPO_MARCA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SEC_MODELO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    especificaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    NRO_DEVENGADO: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    SEC_DEVENGADO: {
      type: DataTypes.DECIMAL(7,0),
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
    NRO_MOVIMTO_DEST: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_DETALLE_ITEM_ALMACEN',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_DET_ITEM_ALMA_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "sec_ejec" },
          { name: "ALMACEN" },
          { name: "SEC_ALMACEN" },
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
          { name: "TIPO_PPTO" },
          { name: "NRO_MOVIMTO" },
          { name: "SECUENCIA" },
        ]
      },
      {
        name: "PK_SIG_DETALLE_ITEM_ALMA",
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
          { name: "SEC_ITEM" },
        ]
      },
    ]
  });
};
