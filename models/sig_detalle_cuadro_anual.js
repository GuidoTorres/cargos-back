const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_detalle_cuadro_anual', {
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_cuadro_anual',
        key: 'tipo_tarea'
      }
    },
    centro_costo: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_cuadro_anual',
        key: 'tipo_tarea'
      }
    },
    ano_eje: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_cuadro_anual',
        key: 'tipo_tarea'
      }
    },
    tipo_tarea: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_cuadro_anual',
        key: 'tipo_tarea'
      }
    },
    nivel_tarea: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_cuadro_anual',
        key: 'tipo_tarea'
      }
    },
    codigo_tarea: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_cuadro_anual',
        key: 'tipo_tarea'
      }
    },
    secuencia: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_cuadro_anual',
        key: 'tipo_tarea'
      }
    },
    fase_cuadro: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    item_sec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    tipo_bien: {
      type: DataTypes.STRING(1),
      allowNull: false,
      references: {
        model: 'CATALOGO_BIEN_SERV',
        key: 'TIPO_BIEN'
      }
    },
    grupo_bien: {
      type: DataTypes.STRING(2),
      allowNull: false,
      references: {
        model: 'CATALOGO_BIEN_SERV',
        key: 'TIPO_BIEN'
      }
    },
    clase_bien: {
      type: DataTypes.STRING(2),
      allowNull: false,
      references: {
        model: 'CATALOGO_BIEN_SERV',
        key: 'TIPO_BIEN'
      }
    },
    familia_bien: {
      type: DataTypes.STRING(4),
      allowNull: false,
      references: {
        model: 'CATALOGO_BIEN_SERV',
        key: 'TIPO_BIEN'
      }
    },
    item_bien: {
      type: DataTypes.STRING(4),
      allowNull: false,
      references: {
        model: 'CATALOGO_BIEN_SERV',
        key: 'TIPO_BIEN'
      }
    },
    descrip_servicio: {
      type: DataTypes.STRING(350),
      allowNull: true
    },
    categ_gasto: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    grupo_gasto: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    clasificador: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'SIG_CLASIFICADOR_GASTO',
        key: 'CLASIFICADOR'
      }
    },
    unidad_medida: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    precio_unit: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: 0
    },
    cant_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    cant_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    cant_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    cant_04: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    cant_05: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    cant_06: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    cant_07: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    cant_08: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    cant_09: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    cant_10: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    cant_11: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    cant_12: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    cant_total: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    mnto_01: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    mnto_02: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    mnto_03: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    mnto_04: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    mnto_05: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    mnto_06: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    mnto_07: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    mnto_08: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    mnto_09: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    mnto_10: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    mnto_11: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    mnto_12: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    mnto_total: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    stock_asig: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    valor_stock: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    tipo_impto: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    tasa_impto: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    fte_impto: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    valor_impto: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    estado: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    cant_hist: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    mnto_hist: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true,
      defaultValue: 0
    },
    nro_consolid: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    estado_paac: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    nro_pedido: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    porc_gasto: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: true
    },
    flag_gasto: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    flag_modif: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    equipo_reg: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    cuser_id: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    fecha_reg: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_detalle_cuadro_anual',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PK_SIG_DETALLE_CUADRO_ANUAL",
        unique: true,
        fields: [
          { name: "sec_ejec" },
          { name: "centro_costo" },
          { name: "ano_eje" },
          { name: "tipo_tarea" },
          { name: "nivel_tarea" },
          { name: "codigo_tarea" },
          { name: "secuencia" },
          { name: "fase_cuadro" },
          { name: "item_sec" },
        ]
      },
      {
        name: "ind_sig_detalle_cuadr_anual_02",
        fields: [
          { name: "ano_eje" },
          { name: "sec_ejec" },
          { name: "centro_costo" },
          { name: "tipo_tarea" },
          { name: "nivel_tarea" },
          { name: "codigo_tarea" },
          { name: "secuencia" },
        ]
      },
      {
        name: "IND_SIG_DETALLE_CUADR_ANUAL_03",
        fields: [
          { name: "ano_eje" },
          { name: "clasificador" },
        ]
      },
      {
        name: "pk_sig_detalle_cuadro_anual",
        unique: true,
        fields: [
          { name: "sec_ejec" },
          { name: "centro_costo" },
          { name: "ano_eje" },
          { name: "tipo_tarea" },
          { name: "nivel_tarea" },
          { name: "codigo_tarea" },
          { name: "secuencia" },
          { name: "fase_cuadro" },
          { name: "item_sec" },
        ]
      },
    ]
  });
};
