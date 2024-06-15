const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_ORDEN_DETA_TRX', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SI_ORDEN_TRX',
        key: 'SEC_EJEC'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SI_ORDEN_TRX',
        key: 'SEC_EJEC'
      }
    },
    ID_SI_ORDEN: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SI_ORDEN_TRX',
        key: 'SEC_EJEC'
      }
    },
    ID_SI_ORDEN_DETA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_ORDEN: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ITEM_CATALOGO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    D_ITEM_CATALOGO: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    GRUPO_BS: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASE_BS: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FAMILIA_BS: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ITEM_BS: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    CANTIDAD_ITEM_BS: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    PRECIO_UNITARIO: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    PRECIO_TOTAL: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    UNIDAD_MEDIDA_ITEM_BS: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    D_UNIDAD_MEDIDA_ITEM_BS: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    ESPECIFICACIONES_ITEM_BS: {
      type: DataTypes.STRING(4000),
      allowNull: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FUENTE_FINANCIAMIENTO: {
      type: DataTypes.STRING(2),
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
    SUB_PROGRAMA: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    META: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    UNIDAD_MEDIDA_META: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    D_UNIDAD_MEDIDA_META: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    DEPARTAMENTO_META: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROVINCIA_META: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DISTRITO_META: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FINALIDAD: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    D_FINALIDAD: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    PROGRAMA_INSTITUCIONAL: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    FECHA_CARGA_INICIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_CARGA_FIN: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_ENVIO: {
      type: DataTypes.DATE,
      allowNull: true
    },
    USUARIO_ENVIO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    sub_finalidad: {
      type: DataTypes.STRING(7),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SI_ORDEN_DETA_TRX',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SI_ORDEN_DETA_TRX",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ID_SI_ORDEN" },
          { name: "ID_SI_ORDEN_DETA" },
        ]
      },
    ]
  });
};
