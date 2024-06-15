const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONVOCATORIA_ITEM', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVOCATORIA',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVOCATORIA',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVOCATORIA',
        key: 'TIPO_GENERACION'
      }
    },
    PROCESO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVOCATORIA',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVOCATORIA',
        key: 'TIPO_GENERACION'
      }
    },
    CONVOCATORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONVOCATORIA',
        key: 'TIPO_GENERACION'
      }
    },
    NRO_ITEM: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_LOTE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    SEC_LOTE: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    ORDEN_ITEM: {
      type: DataTypes.DECIMAL(4,0),
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
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    PRESENTACION: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    ESPEC_TECNICAS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MONEDA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRECIO_MONEDA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRECIO_SOLES: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_SOLES: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    FECHA_ENTREGA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LUGAR_ENTREGA: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    FORMA_PAGO: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ETAPA: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FECHA_ETAPA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MOTIVO_ESTADO: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FECHA_ESTADO: {
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
    PAIS: {
      type: DataTypes.STRING(4),
      allowNull: true,
      references: {
        model: 'ubigeo',
        key: 'provincia'
      }
    },
    DEPARTAMENTO: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'ubigeo',
        key: 'provincia'
      }
    },
    PROVINCIA: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'ubigeo',
        key: 'provincia'
      }
    },
    DISTRITO: {
      type: DataTypes.STRING(2),
      allowNull: true,
      references: {
        model: 'ubigeo',
        key: 'provincia'
      }
    },
    GRUPO_BIEN_GEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASE_BIEN_GEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FAMILIA_BIEN_GEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ITEM_BIEN_GEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    UNIDAD_MEDIDA_GEN: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CANTIDAD_GEN: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    FACTOR_GEN: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    }
  }, {
    sequelize,
    tableName: 'SIG_CONVOCATORIA_ITEM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_CONV_ITEM_03",
        fields: [
          { name: "PAIS" },
          { name: "DEPARTAMENTO" },
          { name: "PROVINCIA" },
          { name: "DISTRITO" },
        ]
      },
      {
        name: "PK_SIG_CONVOCATORIA_ITEM",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_GENERACION" },
          { name: "PROCESO" },
          { name: "SEC_PROCESO" },
          { name: "CONVOCATORIA" },
          { name: "NRO_ITEM" },
        ]
      },
    ]
  });
};
