const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PATRIMONIO', {
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
    TIPO_PATRIM: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'sig_subtipos_patrimonio',
        key: 'tipo_patrim'
      }
    },
    CLASE_PATRIM: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'sig_subtipos_patrimonio',
        key: 'tipo_patrim'
      }
    },
    SUBTIPO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'sig_subtipos_patrimonio',
        key: 'tipo_patrim'
      }
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    FLAG_SBN: {
      type: DataTypes.STRING(1),
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
    TIPO_ACTIVO: {
      type: DataTypes.STRING(1),
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
    VALOR_NEA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
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
    TIPO_UBICAC: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true,
      references: {
        model: 'SIG_UBICAC_FISICA',
        key: 'TIPO_UBICAC'
      }
    },
    COD_UBICAC: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'SIG_UBICAC_FISICA',
        key: 'TIPO_UBICAC'
      }
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
    FECHA_MOVIMTO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_COMPRA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VALOR_COMPRA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      references: {
        model: 'SIG_CONTRATISTAS',
        key: 'PROVEEDOR'
      }
    },
    NRO_PECOSA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FECHA_ALTA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'SIG_ALMACEN',
        key: 'sec_ejec'
      }
    },
    SEC_ALMACEN: {
      type: DataTypes.STRING(3),
      allowNull: true,
      references: {
        model: 'SIG_ALMACEN',
        key: 'sec_ejec'
      }
    },
    FLAG_ETIQUETA: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_N\r\n\tAS N"
    },
    FECHA_ETIQUET: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_SALIDA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FEC_FIN_VIDA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    VIDA_UTIL: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    VALOR_UIT: {
      type: DataTypes.DECIMAL(8,4),
      allowNull: true
    },
    MODAL_DEPREC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FACTOR_AJUSTE: {
      type: DataTypes.DECIMAL(9,6),
      allowNull: true
    },
    TASA_DEPREC: {
      type: DataTypes.DECIMAL(8,4),
      allowNull: true
    },
    VALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_DEPREC: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    ANO_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MES_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    HVALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    HDEPR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    HDEPR_PERIODO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    HDEPR_EJERCICIO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    AVALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    ADEPR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    ADEPR_PERIODO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    ADEPR_ACUMUL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    ADEPR_EJERCICIO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    FECHA_PROCESO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO_VALOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_VALOR: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_CAUSAL: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'SIG_CAUSAL_BAJA',
        key: 'TIPO_CAUSAL'
      }
    },
    CLASE_CAUSAL: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true,
      references: {
        model: 'SIG_CAUSAL_BAJA',
        key: 'TIPO_CAUSAL'
      }
    },
    FEC_BAJA_CTBLE: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FEC_BAJA_FISICA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OBSERV_BAJA: {
      type: DataTypes.STRING(150),
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
    NRO_MOV_BAJA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    NRO_MOV_TRANS: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FLAG_CONTRATO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_CONTRATO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    FECHA_GARANTIA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_GARANTIA_FIN: {
      type: DataTypes.DATE,
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
    ITEM_PROCESO: {
      type: DataTypes.STRING(35),
      allowNull: true
    },
    SEC_CONTRATO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    FLAG_COMPARTIDO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FECHA_ACT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EQUIPO_ACT: {
      type: DataTypes.STRING(20),
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
    OBSERVACIONES: {
      type: DataTypes.STRING(300),
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
    FLAG_PECOSA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CARACTERISTICAS: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    TIPO_MARCA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    hdepr_ajustada: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    adepr_ajustada: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    mayor_baja: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    sub_cta_baja: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    flag_familia_sbn: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    valor_bien: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    NRO_PECOSA_TRANS: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FEC_PECOSA_TRANS: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_TRANSFERIR: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    TIPO_MODA_INST: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SEC_TRANSFERIR: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    ESTADO_CONSERV_FIN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_MOVI_NEA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_TRAN_NEA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    PAIS: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    NRO_EXPEDIENTE_BAJA: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    CODIGO_ITEM_ORIG: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    CODIGO_ACTIVO_ORIG: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    DESCRIPCION_ORIG: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    SEC_MODELO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    flag_esni: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_N\r\n\tAS N"
    },
    SEC_SOBRANTE: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    FLAG_SBN_ACTIVO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_N\r\n\tAS N"
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    IND_COMPONETIZABLE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VIDA_UTIL_MESES: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    FLAG_DEVOLUCION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IND_TIPO_DEPREC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IND_MODI_TIPO_DEPREC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FEC_FIN_AFECTA_USO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CANT_TOTAL_PRODUCIDA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: 0
    },
    VALOR_INICIAL_ORIG: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    VALOR_DEPREC_ORIG: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    COD_FONDO: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    COD_DIV: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    FLAG_DEPR_SALDO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SALDO_VALOR_INICIAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    FECHA_ALTA_ORIGEN: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PATRIMONIO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ind_sig_patrimonio_01",
        fields: [
          { name: "SEC_EJEC" },
          { name: "EMPLEADO" },
          { name: "TIPO_UBICAC" },
          { name: "COD_UBICAC" },
          { name: "ANO_EJE" },
          { name: "CENTRO_COSTO" },
          { name: "SEDE" },
          { name: "pliego" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
        ]
      },
      {
        name: "IND_SIG_PATRIMONIO_02",
        fields: [
          { name: "DESCRIPCION" },
        ]
      },
      {
        name: "IND_SIG_PATRIMONIO_03",
        fields: [
          { name: "FECHA_MOVIMTO" },
        ]
      },
      {
        name: "IND_SIG_PATRIMONIO_09",
        fields: [
          { name: "SECUENCIA" },
          { name: "TIPO_MODALIDAD" },
          { name: "TIPO_BIEN" },
          { name: "SEC_EJEC" },
          { name: "GRUPO_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "TIPO_UBICAC" },
          { name: "COD_UBICAC" },
          { name: "EMPLEADO" },
          { name: "ANO_EJE" },
          { name: "CENTRO_COSTO" },
          { name: "SEDE" },
          { name: "pliego" },
          { name: "MARCA" },
          { name: "TIPO_MARCA" },
        ]
      },
      {
        name: "IND_SIG_PATRIMONIO_11",
        fields: [
          { name: "TIPO_MODALIDAD" },
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "EMPLEADO" },
          { name: "TIPO_UBICAC" },
          { name: "COD_UBICAC" },
          { name: "CENTRO_COSTO" },
          { name: "SEDE" },
          { name: "pliego" },
          { name: "MAYOR" },
          { name: "ESTADO" },
          { name: "CODIGO_ACTIVO" },
          { name: "DESCRIPCION" },
          { name: "CODIGO_BARRA" },
        ]
      },
      {
        name: "IND_SIG_PATRIMONIO_12",
        fields: [
          { name: "TIPO_MARCA" },
          { name: "MARCA" },
        ]
      },
      {
        name: "IND_SIG_PATRIMONIO_13",
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "ESTADO" },
          { name: "EMPLEADO" },
          { name: "TIPO_UBICAC" },
          { name: "COD_UBICAC" },
          { name: "CENTRO_COSTO" },
          { name: "SEDE" },
          { name: "pliego" },
          { name: "SECUENCIA" },
          { name: "CODIGO_ACTIVO" },
          { name: "DESCRIPCION" },
          { name: "CODIGO_BARRA" },
        ]
      },
      {
        name: "IND_SIG_PATRIMONIO_14",
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
        name: "IND_SIG_PATRIMONIO_15",
        fields: [
          { name: "pliego" },
          { name: "SEDE" },
        ]
      },
      {
        name: "IND_SIG_PATRIMONIO_16",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
        ]
      },
      {
        name: "IND_SIG_PATRIMONIO_17",
        fields: [
          { name: "SEC_EJEC" },
          { name: "EMPLEADO" },
        ]
      },
      {
        name: "IND_SIG_PATRIMONIO_18",
        fields: [
          { name: "SEC_EJEC" },
          { name: "ALMACEN" },
          { name: "SEC_ALMACEN" },
        ]
      },
      {
        name: "IND_SIG_PATRIMONIO_20",
        fields: [
          { name: "PROVEEDOR" },
        ]
      },
      {
        name: "IND_SIG_PATRIMONIO_21",
        fields: [
          { name: "TIPO_PATRIM" },
          { name: "CLASE_PATRIM" },
          { name: "SUBTIPO" },
        ]
      },
      {
        name: "IND_SIG_PATRIMONIO_22",
        fields: [
          { name: "TIPO_CAUSAL" },
          { name: "CLASE_CAUSAL" },
        ]
      },
      {
        name: "IND_SIG_PATRIMONIO_23",
        fields: [
          { name: "TIPO_UBICAC" },
          { name: "COD_UBICAC" },
        ]
      },
      {
        name: "IND_SIG_PATRIMONIO_24",
        fields: [
          { name: "ANO_EJE" },
          { name: "MAYOR" },
          { name: "SUB_CTA" },
        ]
      },
      {
        name: "IND_SIG_PATRIMONIO_25",
        fields: [
          { name: "ANO_EJE" },
          { name: "CLASIFICADOR" },
        ]
      },
      {
        name: "IND_SIG_PATRIMONIO_26",
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SEC_SOBRANTE" },
        ]
      },
      {
        name: "IND_SIG_PATRIMONIO_30",
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
          { name: "MAYOR" },
          { name: "TIPO_ACTIVO" },
          { name: "SUB_CTA" },
          { name: "FECHA_ALTA" },
          { name: "FECHA_MOVIMTO" },
          { name: "ESTADO" },
          { name: "FEC_BAJA_CTBLE" },
          { name: "VIDA_UTIL" },
        ]
      },
      {
        name: "IND_SIG_PATRIMONIO_31",
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
          { name: "MAYOR" },
          { name: "SUB_CTA" },
        ]
      },
      {
        name: "PK_SIG_PATRIMONIO",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
