const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CUADRO_NECESIDAD_DET', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_NECESIDAD',
        key: 'SECUENCIA'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_NECESIDAD',
        key: 'SECUENCIA'
      }
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_NECESIDAD',
        key: 'SECUENCIA'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_NECESIDAD',
        key: 'SECUENCIA'
      }
    },
    FASE_CUADRO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_NECESIDAD',
        key: 'SECUENCIA'
      }
    },
    ITEM_SEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      references: {
        model: 'CATALOGO_BIEN_SERV',
        key: 'TIPO_BIEN'
      }
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false,
      references: {
        model: 'CATALOGO_BIEN_SERV',
        key: 'TIPO_BIEN'
      }
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: false,
      references: {
        model: 'CATALOGO_BIEN_SERV',
        key: 'TIPO_BIEN'
      }
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false,
      references: {
        model: 'CATALOGO_BIEN_SERV',
        key: 'TIPO_BIEN'
      }
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: false,
      references: {
        model: 'CATALOGO_BIEN_SERV',
        key: 'TIPO_BIEN'
      }
    },
    DESCRIP_SERVICIO: {
      type: DataTypes.STRING(350),
      allowNull: true
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
    CANT_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CANT_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CANT_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CANT_04: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CANT_05: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CANT_06: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CANT_07: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CANT_08: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CANT_09: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CANT_10: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CANT_11: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CANT_12: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CANT_TOTAL: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MNTO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MNTO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MNTO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MNTO_04: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MNTO_05: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MNTO_06: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MNTO_07: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MNTO_08: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MNTO_09: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MNTO_10: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MNTO_11: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MNTO_12: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MNTO_TOTAL: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    STOCK_ASIG: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_STOCK: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    TIPO_IMPTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TASA_IMPTO: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    FTE_IMPTO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    VALOR_IMPTO: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CANT_HIST: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MNTO_HIST: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    ESTADO_PAAC: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_PEDIDO: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    PORC_GASTO: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    FLAG_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_MODIF: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    flag_migra: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tipo_origen_externo_det: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    cantidad_unitaria: {
      type: DataTypes.DECIMAL(19,10),
      allowNull: true
    },
    porcentaje: {
      type: DataTypes.DECIMAL(6,2),
      allowNull: true
    },
    ID_KIT: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    tipo_calculo: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    flag_origen_det: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_ITEM_KIT: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    bd_copia: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    STOCK: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    FLAG_PREVISION: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DOCUM_TIPO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DOCUM_NRO: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CANT_OPAGO1: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_OPAGO2: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_OPAGO3: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_PREVISION1: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_PREVISION2: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    CANT_PREVISION3: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_OPAGO1: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_OPAGO2: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_OPAGO3: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_PREVISION1: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_PREVISION2: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    MNTO_PREVISION3: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    PRECIO_UNIT_OP: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    DOCUM_TIPO_PP: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DOCUM_NRO_PP: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    CANT_OPAGO4: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_PREVISION4: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_OPAGO4: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_PREVISION4: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_01_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_02_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_03_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_04_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_05_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_06_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_07_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_08_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_09_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_10_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_11_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_12_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_TOTAL_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_01_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_02_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_03_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_04_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_05_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_06_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_07_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_08_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_09_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_10_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_11_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_12_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_TOTAL_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_01_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_02_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_03_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_04_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_05_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_06_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_07_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_08_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_09_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_10_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_11_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_12_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    CANT_TOTAL_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_01_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_02_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_03_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_04_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_05_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_06_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_07_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_08_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_09_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_10_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_11_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_12_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_TOTAL_ANNO_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_01_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_02_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_03_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_04_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_05_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_06_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_07_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_08_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_09_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_10_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_11_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_12_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_TOTAL_ANNO_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_01_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_02_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_03_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_04_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_05_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_06_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_07_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_08_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_09_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_10_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_11_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_12_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    MNTO_TOTAL_ANNO_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    FLG_MNTO_01_ANNO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_02_ANNO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_03_ANNO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_04_ANNO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_05_ANNO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_06_ANNO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_07_ANNO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_08_ANNO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_09_ANNO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_10_ANNO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_11_ANNO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_12_ANNO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_01_ANNO_01: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_02_ANNO_01: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_03_ANNO_01: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_04_ANNO_01: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_05_ANNO_01: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_06_ANNO_01: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_07_ANNO_01: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_08_ANNO_01: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_09_ANNO_01: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_10_ANNO_01: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_11_ANNO_01: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_12_ANNO_01: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_01_ANNO_02: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_02_ANNO_02: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_03_ANNO_02: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_04_ANNO_02: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_05_ANNO_02: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_06_ANNO_02: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_07_ANNO_02: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_08_ANNO_02: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_09_ANNO_02: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_10_ANNO_02: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_11_ANNO_02: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_12_ANNO_02: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_01_ANNO_03: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_02_ANNO_03: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_03_ANNO_03: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_04_ANNO_03: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_05_ANNO_03: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_06_ANNO_03: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_07_ANNO_03: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_08_ANNO_03: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_09_ANNO_03: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_10_ANNO_03: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_11_ANNO_03: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    },
    FLG_MNTO_12_ANNO_03: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "1"
    }
  }, {
    sequelize,
    tableName: 'SIG_CUADRO_NECESIDAD_DET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_CUADRO_NECE_DET_01",
        fields: [
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
          { name: "SEC_EJEC" },
        ]
      },
      {
        name: "IND_CUADRO_NECE_DET_02",
        fields: [
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "SECUENCIA" },
          { name: "ANO_EJE" },
          { name: "FASE_CUADRO" },
        ]
      },
      {
        name: "IND_CUADRO_NECE_DET_03",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
          { name: "FASE_CUADRO" },
        ]
      },
      {
        name: "ind_scnd_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "FASE_CUADRO" },
          { name: "ESTADO" },
          { name: "ESTADO_ITEM_KIT" },
          { name: "TIPO_BIEN" },
        ]
      },
      {
        name: "IND_SCND_01_A",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "FASE_CUADRO" },
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
        ]
      },
      {
        name: "IND_SCND_01_B",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "FASE_CUADRO" },
          { name: "SECUENCIA" },
          { name: "TIPO_BIEN" },
        ]
      },
      {
        name: "PK_SIG_CUADRO_NECESIDAD_DET",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "SECUENCIA" },
          { name: "FASE_CUADRO" },
          { name: "ITEM_SEC" },
        ]
      },
    ]
  });
};
