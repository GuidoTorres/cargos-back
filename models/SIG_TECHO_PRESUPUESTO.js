const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_TECHO_PRESUPUESTO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'meta',
        key: 'sec_func'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'meta',
        key: 'sec_func'
      }
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Fuente_Financ_Ejec',
        key: 'SEC_EJEC'
      }
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Fuente_Financ_Ejec',
        key: 'SEC_EJEC'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true
    },
    CATEG_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      references: {
        model: 'Grupo_Gasto',
        key: 'grupo_gasto'
      }
    },
    GRUPO_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      references: {
        model: 'Grupo_Gasto',
        key: 'grupo_gasto'
      }
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
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
    sec_func: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true,
      references: {
        model: 'meta',
        key: 'sec_func'
      }
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    PORC_TECHO: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PPTO_PROGRA: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PPTO_APROB: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PPTO_ASIGNADO: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PPTO_MODIF: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MNTO_PROGRA: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MNTO_ASIG: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MNTO_APROB: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MNTO_MODIF: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    INDICADOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PAAC_INICIAL: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PAAC_MODIF: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PORC_ASIG: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CUADRE_PPTO_PROGRA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CUADRE_PPTO_MODIF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CUADRE_PPTO_APROB: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CUADRE_PPTO_ASIGNA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    PPTO_RESER: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_01: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_02: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_03: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_04: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_05: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_06: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_07: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_08: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_09: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_10: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_11: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    EJEC_12: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PPTO_CONTAB: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PPTO_PIA: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PPTO_CPIA: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_01: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_02: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_03: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_04: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_05: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_06: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_07: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_08: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_09: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_10: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_11: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRE_EJEC_12: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PROYECTO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    SUB_FUENTE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    RESER_PAO: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    RESER_PROCESO: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    SEC_FUNC_PROP: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    FLAG_META_APROB: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CENTRO_COSTO_PRESUP: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    FONDO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CODIGO_DESTINO: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PAAC_AUTORIZADO: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PPTO_RESER2: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    FASE_CUADRO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    TIPO_TAREA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NIVEL_TAREA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CODIGO_TAREA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    PPTO_EST: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PPTO_DEF: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PPTO_SIAF: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    FECHA_SIAF: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PPTO_EJECU: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PPTO_SIGA: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PPTO_DEF_ANUAL: {
      type: DataTypes.DECIMAL(19,2),
      allowNull: true
    },
    mnto_acum_cert: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    mnto_acum_coma: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    mnto_acum_comm: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    PPTO_DISP_SIAF: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MNTO_ACUM_CERT_SIAF: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MNTO_ACUM_COMA_SIAF: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MNTO_ACUM_COMM_SIAF: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MNTO_ACUM_DEVGDO_SIGA: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MNTO_SALDO_DEVGDO_SIGA: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MNTO_ACUM_DEVGDO_SIAF: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MNTO_RESERVA_PEDIDO: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MNTO_OPAGO: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MNTO_PREVISION: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    MNTO_OPAGO2: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_OPAGO3: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_OPAGO4: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_PREVISION2: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_PREVISION3: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_PREVISION4: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_ANNO_01: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_ANNO_02: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_ANNO_03: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0
    },
    PPTO_ANNO_01: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0
    },
    PPTO_ANNO_02: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0
    },
    PPTO_ANNO_03: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'SIG_TECHO_PRESUPUESTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_TECHO_PRES2_01",
        fields: [
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "ANO_EJE" },
        ]
      },
      {
        name: "IND_SIG_TECHO_PRES2_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "CLASIFICADOR" },
        ]
      },
      {
        name: "IND_SIG_TECHO_PRES2_03",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
        ]
      },
      {
        name: "IND_SIG_TECHO_PRES2_04",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "sec_func" },
        ]
      },
      {
        name: "IND_SIG_TECHO_PRES2_05",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_FUNC_PROP" },
        ]
      },
      {
        name: "IND_SIG_TECHO_PRES2_06",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
        ]
      },
      {
        name: "IND_SIG_TECHO_PRES2_07",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO_PRESUP" },
        ]
      },
      {
        name: "IND_SIG_TECHO_PRES2_08",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
          { name: "CATEG_GASTO" },
          { name: "GRUPO_GASTO" },
          { name: "SEC_FUNC_PROP" },
          { name: "CLASIFICADOR" },
          { name: "CENTRO_COSTO_PRESUP" },
          { name: "CENTRO_COSTO" },
        ]
      },
      {
        name: "IND_SIG_TECHO_PRES2_09",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
          { name: "CATEG_GASTO" },
          { name: "GRUPO_GASTO" },
          { name: "sec_func" },
          { name: "CLASIFICADOR" },
          { name: "CENTRO_COSTO_PRESUP" },
          { name: "CENTRO_COSTO" },
        ]
      },
      {
        name: "IND_SIG_TECHO_PRES2_10",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
          { name: "CATEG_GASTO" },
          { name: "GRUPO_GASTO" },
          { name: "SEC_FUNC_PROP" },
          { name: "CLASIFICADOR" },
          { name: "CENTRO_COSTO_PRESUP" },
          { name: "FASE_CUADRO" },
          { name: "INDICADOR" },
          { name: "FLAG_META_APROB" },
        ]
      },
      {
        name: "IND_SIG_TECHO_PRES2_11",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
          { name: "CATEG_GASTO" },
          { name: "GRUPO_GASTO" },
          { name: "FUNCION" },
          { name: "PROGRAMA" },
          { name: "SEC_FUNC_PROP" },
          { name: "CLASIFICADOR" },
          { name: "CENTRO_COSTO_PRESUP" },
          { name: "CENTRO_COSTO" },
          { name: "FASE_CUADRO" },
          { name: "INDICADOR" },
          { name: "FLAG_META_APROB" },
        ]
      },
      {
        name: "IND_SIG_TECHO_PRES2_13",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "INDICADOR" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
          { name: "CLASIFICADOR" },
          { name: "FUNCION" },
          { name: "PROGRAMA" },
          { name: "sec_func" },
        ]
      },
      {
        name: "IND_SIG_TECHO_PRES2_14",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "INDICADOR" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
          { name: "CATEG_GASTO" },
          { name: "GRUPO_GASTO" },
          { name: "CLASIFICADOR" },
          { name: "FUNCION" },
          { name: "PROGRAMA" },
          { name: "sec_func" },
        ]
      },
      {
        name: "IND_STP_05_A",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "FLAG_META_APROB" },
          { name: "FASE_CUADRO" },
          { name: "CENTRO_COSTO_PRESUP" },
          { name: "INDICADOR" },
          { name: "FUENTE_FINANC" },
          { name: "CATEG_GASTO" },
          { name: "GRUPO_GASTO" },
          { name: "SEC_FUNC_PROP" },
        ]
      },
      {
        name: "IND_STP_05_B",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "FLAG_META_APROB" },
          { name: "FASE_CUADRO" },
          { name: "CENTRO_COSTO_PRESUP" },
          { name: "INDICADOR" },
          { name: "CLASIFICADOR" },
          { name: "FUENTE_FINANC" },
          { name: "CATEG_GASTO" },
          { name: "GRUPO_GASTO" },
          { name: "SEC_FUNC_PROP" },
        ]
      },
      {
        name: "PK_TECHO_PRESUPUESTO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
