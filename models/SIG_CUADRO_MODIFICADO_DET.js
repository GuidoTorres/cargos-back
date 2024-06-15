const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CUADRO_MODIFICADO_DET', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_SALDO',
        key: 'SEC_EJEC'
      }
    },
    ANNO_EJEC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_SALDO',
        key: 'SEC_EJEC'
      }
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'sig_centro_costo_tarea',
        key: 'tipo_tarea'
      }
    },
    SEC_CUADRO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO',
        key: 'SEC_EJEC'
      }
    },
    SEC_ITEM: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    ANNO_PROG: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    ESTADO: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    PROCEDENCIA: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLAG_MODIFICADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLAG_SOLICITUD: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    MOTIVO_SOLICITUD: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLAG_GASTO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    NRO_GASTO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    PORC_GASTO: {
      type: DataTypes.DECIMAL(14,2),
      allowNull: false
    },
    PRECIO_REF: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: false
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      references: {
        model: 'Fuente_Financ_Ejec',
        key: 'SEC_EJEC'
      }
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
      allowNull: false,
      references: {
        model: 'Fuente_Financ_Ejec',
        key: 'SEC_EJEC'
      }
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false
    },
    TIPO_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      references: {
        model: 'sig_centro_costo_tarea',
        key: 'tipo_tarea'
      }
    },
    NIVEL_TAREA: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      references: {
        model: 'sig_centro_costo_tarea',
        key: 'tipo_tarea'
      }
    },
    CODIGO_TAREA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      references: {
        model: 'sig_centro_costo_tarea',
        key: 'tipo_tarea'
      }
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: false,
      references: {
        model: 'SIG_CLASIFICADOR_GASTO',
        key: 'CLASIFICADOR'
      }
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
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    PRECIO_UNIT: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: false
    },
    SEC_CUA_MOD_SAL: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_SALDO',
        key: 'SEC_EJEC'
      }
    },
    FLG_MNTO_01: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_02: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_03: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_04: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_05: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_06: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_07: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_08: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_09: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_10: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_11: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    FLG_MNTO_12: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    CANT_01: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_02: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_03: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_04: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_05: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_06: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_07: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_08: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_09: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_10: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_11: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_12: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CANT_TOTAL: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    MNTO_01: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    MNTO_02: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    MNTO_03: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    MNTO_04: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    MNTO_05: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    MNTO_06: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    MNTO_07: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    MNTO_08: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    MNTO_09: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    MNTO_10: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    MNTO_11: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    MNTO_12: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    MNTO_TOTAL: {
      type: DataTypes.DECIMAL(20,2),
      allowNull: false
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: false
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CUADRO_MODIFICADO_DET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_CUA_MOD_DET",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANNO_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "SEC_CUADRO" },
          { name: "SEC_ITEM" },
          { name: "ANNO_PROG" },
        ]
      },
    ]
  });
};
