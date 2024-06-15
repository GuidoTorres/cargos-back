const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_BIENES_DURADEROS', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_personal',
        key: 'sec_ejec'
      }
    },
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_ACTIVO: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
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
    DESCRIPCION: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    VALOR_BIEN: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: 0
    },
    MONEDA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    },
    TIPO_DOC_REFER: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    TIPO_DOCUMENTO: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    NRO_DOCUMENTO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FECHA_NEA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    SEDE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    pliego: {
      type: DataTypes.STRING(3),
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
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'sig_personal',
        key: 'sec_ejec'
      }
    },
    EMPLEADO_FINAL: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    CARACTERISTICAS: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    OBSERVACIONES: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    MODELO: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    MEDIDAS: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    NRO_SERIE: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    TIPO_MARCA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MARCA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    ESTADO_ACTUAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_CONSERV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_CONSERV_FIN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_MOVIMTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_COMPRA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    NRO_PECOSA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FECHA_ALTA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_ETIQUETA: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    FECHA_ETIQUET: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_SALIDA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_SALIDA_FINAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CODIGO_BARRA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    INVENT_SCANER: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_MOV_INGR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_TRAN_INGR: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    NRO_MOV_INGR: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    NRO_MOV_SALI: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    NRO_MOV_TRANS: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FLAG_APTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_REPARACION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_CUSTODIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_CUSTODIA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MOTIVO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    FLAG_COMPARTIDO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_UBICA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    OBSERV_FISICO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(4),
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
    TIPO_UBICAC: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    COD_UBICAC: {
      type: DataTypes.STRING(3),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_BIENES_DURADEROS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_BD_01",
        fields: [
          { name: "NRO_MOV_INGR" },
        ]
      },
      {
        name: "IND_SIG_BD_02",
        fields: [
          { name: "DESCRIPCION" },
        ]
      },
      {
        name: "IND_SIG_BD_03",
        fields: [
          { name: "FECHA_MOVIMTO" },
        ]
      },
      {
        name: "IND_SIG_BD_05",
        fields: [
          { name: "CODIGO_ACTIVO" },
        ]
      },
      {
        name: "IND_SIG_BD_06",
        fields: [
          { name: "EMPLEADO" },
        ]
      },
      {
        name: "IND_SIG_BD_09",
        fields: [
          { name: "FECHA_ALTA" },
        ]
      },
      {
        name: "IND_SIG_BD_11",
        fields: [
          { name: "CENTRO_COSTO" },
        ]
      },
      {
        name: "IND_SIG_BD_12",
        fields: [
          { name: "TIPO_MARCA" },
          { name: "MARCA" },
        ]
      },
      {
        name: "IND_SIG_BD_13",
        fields: [
          { name: "CODIGO_BARRA" },
        ]
      },
      {
        name: "IND_SIG_BD_14",
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
        ]
      },
      {
        name: "IND_SIG_BD_15",
        fields: [
          { name: "SEDE" },
          { name: "pliego" },
        ]
      },
      {
        name: "IND_SIG_BD_16",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
        ]
      },
      {
        name: "IND_SIG_BD_17",
        fields: [
          { name: "SEC_EJEC" },
          { name: "EMPLEADO" },
        ]
      },
      {
        name: "IND_SIG_BD_26",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
        ]
      },
      {
        name: "PK_SIG_BD",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
