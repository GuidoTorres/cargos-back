const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PEDIDOS', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_centro_costo_tarea',
        key: 'tipo_tarea'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DESTINOS',
        key: 'SEC_EJEC'
      }
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    TIPO_PEDIDO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true
    },
    NRO_PEDIDO: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_DESTINO: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'SIG_DESTINOS',
        key: 'SEC_EJEC'
      }
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'sig_centro_costo_tarea',
        key: 'tipo_tarea'
      }
    },
    NRO_ENCARGO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    SEC_EJEC2: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FECHA_PEDIDO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MOTIVO_PEDIDO: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EMPLEADO: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'sig_personal',
        key: 'sec_ejec'
      }
    },
    TIPO_PPTO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    sec_func: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    TIPO_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      references: {
        model: 'sig_centro_costo_tarea',
        key: 'tipo_tarea'
      }
    },
    NIVEL_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      references: {
        model: 'sig_centro_costo_tarea',
        key: 'tipo_tarea'
      }
    },
    CODIGO_TAREA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      references: {
        model: 'sig_centro_costo_tarea',
        key: 'tipo_tarea'
      }
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FECHA_APROB: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_ATENC: {
      type: DataTypes.DATE,
      allowNull: true
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MES_PEDIDO: {
      type: DataTypes.CHAR(2),
      allowNull: true
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
    INDICADOR_PEDIDO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NOMBRE_EMPLEADO: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    CUSER_DASA: {
      type: DataTypes.STRING(30),
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
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fuente_fto: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    origen_fto: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    tipo_recurso: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    tipo_consumo: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    indicador_interfase: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    expediente: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPO_DESTINO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    SEC_DESTINO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NRO_PEDIDO_RELA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    FLAG_PAD: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CONSUMO_INTERFASE: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ALMACEN_DEST: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    SEC_ALMACEN_DEST: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    INDICADOR_RECIBIDO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FECHA_RECEPCION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ORIGEN_PPR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    META_FISICA: {
      type: DataTypes.DECIMAL(15,0),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    FLAG_PEDIDO_VALIDA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    cuser_id_vb: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    fecha_reg_vb: {
      type: DataTypes.DATE,
      allowNull: true
    },
    equipo_reg_vb: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    empleado_vb: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    flag_firma_digi: {
      type: DataTypes.STRING(1),
      allowNull: true
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
    FLAG_PED_PECOSA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_EXP_DATO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "N"
    },
    EMPLEADO_PECOSA: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    PROCEDENCIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NRO_REQUERIM: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PEDIDOS',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_PEDIDOS_03",
        fields: [
          { name: "SEC_EJEC" },
          { name: "EMPLEADO" },
        ]
      },
      {
        name: "IND_SIG_PEDIDOS_04",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CODIGO_TAREA" },
          { name: "TIPO_TAREA" },
          { name: "CENTRO_COSTO" },
          { name: "NIVEL_TAREA" },
        ]
      },
      {
        name: "IND_SIG_PEDIDOS_05",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_ENCARGO" },
        ]
      },
      {
        name: "IND_SIG_PEDIDOS_06",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "sec_func" },
        ]
      },
      {
        name: "IND_SIG_PEDIDOS_07",
        fields: [
          { name: "SEC_EJEC" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
        ]
      },
      {
        name: "IND_SIG_PEDIDOS_08",
        fields: [
          { name: "SEC_EJEC" },
          { name: "CODIGO_DESTINO" },
        ]
      },
      {
        name: "IND_SIG_PEDIDOS_09",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "origen_fto" },
          { name: "fuente_fto" },
        ]
      },
      {
        name: "IND_SIGPEDIDOS5",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PEDIDO" },
          { name: "NRO_PEDIDO_RELA" },
        ]
      },
      {
        name: "PK_SIG_PEDIDOS",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PEDIDO" },
          { name: "NRO_PEDIDO" },
        ]
      },
    ]
  });
};
