const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DETALLE_PEDIDOS', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_SALDO',
        key: 'SEC_EJEC'
      }
    },
    sec_ejec: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_SALDO',
        key: 'SEC_EJEC'
      }
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PEDIDOS',
        key: 'TIPO_PEDIDO'
      }
    },
    TIPO_PEDIDO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PEDIDOS',
        key: 'TIPO_PEDIDO'
      }
    },
    NRO_PEDIDO: {
      type: DataTypes.STRING(6),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PEDIDOS',
        key: 'TIPO_PEDIDO'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
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
      allowNull: true
    },
    CODIGO_ACTIVO: {
      type: DataTypes.STRING(12),
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
    CANT_SOLICITADA: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CANT_APROBADA: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CANT_ATENDIDA: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRECIO_UNIT: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_TOTAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    ESTADO_PED: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ESTADO_ATEND: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ESTADO_CONFOR: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    FECHA_PECOSA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_APROB: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_CONFOR: {
      type: DataTypes.DATE,
      allowNull: true
    },
    OPERACION: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
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
    NRO_PECOSA: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    NRO_CUADRO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    FECHA_CUADRO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO_COMPRA: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    ESTADO_PROG: {
      type: DataTypes.CHAR(1),
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
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FLAG_CAJA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    monto_mensual_snp: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    nro_meses_snp: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    fecha_inicio_snp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    cargo: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    fecha_fin_snp: {
      type: DataTypes.DATE,
      allowNull: true
    },
    proveedor: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    flag_personalisimo: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    flag_informe_tecnico: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    NRO_DIAS_SNP: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true,
      defaultValue: 0
    },
    ID_CLASIFICADOR: {
      type: DataTypes.CHAR(7),
      allowNull: true
    },
    JUSTIFICACION: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    TIPO_ORDEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_PEDIDO_OT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    FLAG_PROC_OT: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    KIT_EQUIVALENTE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    SEC_CUADRO: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    SEC_ITEM: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    ANNO_PROG: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_DET',
        key: 'SEC_ITEM'
      }
    },
    SEC_CUA_MOD_SAL: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true,
      references: {
        model: 'SIG_CUADRO_MODIFICADO_SALDO',
        key: 'SEC_EJEC'
      }
    }
  }, {
    sequelize,
    tableName: 'SIG_DETALLE_PEDIDOS',
    schema: 'dbo',
    hasTrigger: true,
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_DETALLE_PEDIDOS_03",
        fields: [
          { name: "sec_ejec" },
          { name: "ALMACEN" },
          { name: "SEC_ALMACEN" },
        ]
      },
      {
        name: "IND_SIG_DETALLE_PEDIDOS_10",
        fields: [
          { name: "sec_ejec" },
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
        ]
      },
      {
        name: "PK_SIG_DETALLE_PEDIDOS",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "sec_ejec" },
          { name: "TIPO_BIEN" },
          { name: "TIPO_PEDIDO" },
          { name: "NRO_PEDIDO" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
