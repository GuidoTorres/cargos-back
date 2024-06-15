const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CUADRO_NECESIDAD', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONCEPTO_MAESTRO',
        key: 'CONCEPTO_GASTO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CENTRO_COSTO',
        key: 'SEC_EJEC'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    FASE_CUADRO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_TAREA: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    NIVEL_TAREA: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    CODIGO_TAREA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    SEC_FUNC_PROP: {
      type: DataTypes.DECIMAL(4,0),
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
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: true,
      references: {
        model: 'Fuente_Financ_Ejec',
        key: 'SEC_EJEC'
      }
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'Fuente_Financ_Ejec',
        key: 'SEC_EJEC'
      }
    },
    CONCEPTO_GASTO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      references: {
        model: 'SIG_CONCEPTO_MAESTRO',
        key: 'CONCEPTO_GASTO'
      }
    },
    CATEG_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    TIPO_RECURSO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TOTAL_ASIGNADO: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    TOTAL_PROGRA: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    TOTAL_APROB: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    TOTAL_MODIF: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MONTO_ASIGNADO: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MONTO_PROGRA: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MONTO_APROB: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MONTO_MODIF: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_IMP_ASIGNADO: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_IMP_PROGRA: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_IMP_APROB: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_IMP_MODIF: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    TIPO_IMPUESTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FUENTE_IMPTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TASA_IMPTO: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    FLAG_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EQUIPO_REG: {
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
    tipo_operacion: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    operacion: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    mayor: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    sub_cta: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    sub_cta_det: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    NRO_PLANTILLA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    tipo_bien: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_ORIGEN_EXTERNO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    sec_establec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    sub_finalidad: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    flag_origen_cab: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SECUENCIA_COPIA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    data_origen: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    fase_copia: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    bd_copia: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ID_SUB_FINALIDAD: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    MONTO_ASIGNADO_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_ASIGNADO_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_ASIGNADO_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_PROGRA_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_PROGRA_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_PROGRA_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_APROB_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_APROB_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MONTO_APROB_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'SIG_CUADRO_NECESIDAD',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "idxCustId",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "sub_finalidad" },
        ]
      },
      {
        name: "ind_cn_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "FASE_CUADRO" },
          { name: "TIPO_TAREA" },
          { name: "NIVEL_TAREA" },
          { name: "CODIGO_TAREA" },
          { name: "CLASIFICADOR" },
          { name: "tipo_bien" },
          { name: "SEC_FUNC_PROP" },
          { name: "sec_establec" },
          { name: "sub_finalidad" },
          { name: "CATEG_GASTO" },
          { name: "GRUPO_GASTO" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
        ]
      },
      {
        name: "ind_cn_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
        ]
      },
      {
        name: "IND_SCN_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "FASE_CUADRO" },
          { name: "TIPO_TAREA" },
          { name: "NIVEL_TAREA" },
          { name: "CODIGO_TAREA" },
          { name: "CATEG_GASTO" },
          { name: "GRUPO_GASTO" },
          { name: "CLASIFICADOR" },
          { name: "TIPO_USO" },
          { name: "SEC_FUNC_PROP" },
          { name: "FUENTE_FINANC" },
          { name: "ORIGEN" },
          { name: "tipo_bien" },
          { name: "FLAG_GASTO" },
        ]
      },
      {
        name: "IND_SCN_01_A",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "FASE_CUADRO" },
          { name: "SECUENCIA" },
          { name: "tipo_bien" },
          { name: "CLASIFICADOR" },
          { name: "SEC_FUNC_PROP" },
          { name: "CODIGO_TAREA" },
          { name: "NIVEL_TAREA" },
          { name: "TIPO_TAREA" },
          { name: "TIPO_USO" },
          { name: "FUENTE_FINANC" },
        ]
      },
      {
        name: "IND_SCN_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "FASE_CUADRO" },
          { name: "TIPO_TAREA" },
          { name: "NIVEL_TAREA" },
          { name: "CODIGO_TAREA" },
          { name: "CATEG_GASTO" },
          { name: "GRUPO_GASTO" },
          { name: "CLASIFICADOR" },
          { name: "TIPO_USO" },
          { name: "sec_func" },
          { name: "FUENTE_FINANC" },
          { name: "ORIGEN" },
          { name: "tipo_bien" },
          { name: "FLAG_GASTO" },
        ]
      },
      {
        name: "ind_scn_03",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "FASE_CUADRO" },
          { name: "FLAG_GASTO" },
          { name: "sub_finalidad" },
        ]
      },
      {
        name: "IND_SIG_CUADRO_NECE_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "TIPO_TAREA" },
          { name: "NIVEL_TAREA" },
          { name: "CODIGO_TAREA" },
        ]
      },
      {
        name: "IND_SIG_CUADRO_NECE_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
        ]
      },
      {
        name: "IND_SIG_CUADRO_NECE_04",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_FUNC_PROP" },
        ]
      },
      {
        name: "IND_SIG_CUADRO_NECE_05",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "sec_func" },
        ]
      },
      {
        name: "IND_SIG_CUADRO_NECE_06",
        fields: [
          { name: "ANO_EJE" },
          { name: "CONCEPTO_GASTO" },
        ]
      },
      {
        name: "IND_SIG_CUADRO_NECE_07",
        fields: [
          { name: "ANO_EJE" },
          { name: "CLASIFICADOR" },
        ]
      },
      {
        name: "PK_SIG_CUADRO_NECESIDAD",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "SECUENCIA" },
          { name: "FASE_CUADRO" },
        ]
      },
    ]
  });
};
