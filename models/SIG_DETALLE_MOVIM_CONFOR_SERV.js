const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DETALLE_MOVIM_CONFOR_SERV', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_CONFOR_SERV',
        key: 'TIPO_TRANSAC'
      }
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_CONFOR_SERV',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_MOVIMTO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_CONFOR_SERV',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_TRANSAC: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_CONFOR_SERV',
        key: 'TIPO_TRANSAC'
      }
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_CONFOR_SERV',
        key: 'TIPO_TRANSAC'
      }
    },
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_CONFOR_SERV',
        key: 'TIPO_TRANSAC'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_SECUENCIA_MOV_CONFOR_SERV',
        key: 'TIPO_TRANSAC'
      }
    },
    SEC_DETALLE: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_ITEM: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true,
      references: {
        model: 'CATALOGO_BIEN_SERV',
        key: 'TIPO_BIEN'
      }
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'CATALOGO_BIEN_SERV',
        key: 'TIPO_BIEN'
      }
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'CATALOGO_BIEN_SERV',
        key: 'TIPO_BIEN'
      }
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true,
      references: {
        model: 'CATALOGO_BIEN_SERV',
        key: 'TIPO_BIEN'
      }
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true,
      references: {
        model: 'CATALOGO_BIEN_SERV',
        key: 'TIPO_BIEN'
      }
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    OPERACION: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    FECHA_ENTRADA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CANT_ADQUIRIDO: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false,
      defaultValue: 0
    },
    MEDIDA_ADQUIS: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CANT_RECIBIDO: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false,
      defaultValue: 0
    },
    CANT_ARTICULO: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false,
      defaultValue: 0
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CANT_DEVUELTA: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false,
      defaultValue: 0
    },
    PRECIO_UNIT: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: false,
      defaultValue: 0
    },
    PRECIO_MONEDA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: false,
      defaultValue: 0
    },
    MONEDA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    VALOR_TOTAL: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: false,
      defaultValue: 0
    },
    FECHA_MOVIMTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    INDI_RECIBIDO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    PRECIO_PROMED: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: false,
      defaultValue: 0
    },
    TIPO_DESTINO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MODAL_DESTINO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FLAG_DESTINO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MES_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CANT_ATENDIDA: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false,
      defaultValue: 0
    },
    STOCK_ACTUAL: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: false,
      defaultValue: 0
    },
    VALOR_ACTUAL: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: false,
      defaultValue: 0
    },
    TIPO_MOVIMTO_ORIG: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_TRANSAC_ORIG: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    TIPO_PPTO_ORIG: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    NRO_MOVIMTO_ORIG: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    SECUENCIA_ORIG: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    SEC_DETALLE_ORIG: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    FLAG_INTERFASE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_INTERFASE: {
      type: DataTypes.DATE,
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
    NOMBRE_INTERFASE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    ANO_PPA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NRO_PPA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    FLAG_EXO_IMPTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_CREDITO_FISCAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CONSUMO_INTERFASE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ITEM_BIEN_DET: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    ESTADO_RECEPCION: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    ESPECIFICACIONES: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    SEC_MODELO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_DETALLE_MOVIM_CONFOR_SERV',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_CAT_FAM_ITEM",
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
        ]
      },
      {
        name: "IND_SIG_DET_MOV_CF_01",
        fields: [
          { name: "CENTRO_COSTO" },
          { name: "SEC_EJEC" },
        ]
      },
      {
        name: "IND_SIG_DET_MOV_CF_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
          { name: "NRO_MOVIMTO" },
          { name: "SECUENCIA" },
          { name: "TIPO_PPTO" },
        ]
      },
      {
        name: "IND_SIG_DET_MOV_CF_03",
        fields: [
          { name: "ITEM_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "TIPO_BIEN" },
        ]
      },
      {
        name: "PK_SIG_DETALLE_MOVIM_CF",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "TIPO_MOVIMTO" },
          { name: "TIPO_TRANSAC" },
          { name: "TIPO_PPTO" },
          { name: "NRO_MOVIMTO" },
          { name: "SECUENCIA" },
          { name: "SEC_DETALLE" },
        ]
      },
    ]
  });
};
