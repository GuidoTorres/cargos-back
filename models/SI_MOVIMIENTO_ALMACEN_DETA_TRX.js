const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SI_MOVIMIENTO_ALMACEN_DETA_TRX', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SI_MOVIMIENTO_ALMACEN_TRX',
        key: 'SEC_EJEC'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SI_MOVIMIENTO_ALMACEN_TRX',
        key: 'SEC_EJEC'
      }
    },
    ID_SI_MOV_ALM: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SI_MOVIMIENTO_ALMACEN_TRX',
        key: 'SEC_EJEC'
      }
    },
    ID_SI_MOV_ALM_DETA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    ITEM_CATALOGO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    D_ITEM_CATALOGO: {
      type: DataTypes.STRING(150),
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
    MARCA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    D_MARCA: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    TIPO_USO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CLASIFICADOR: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    FINALIDAD: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    D_FINALIDAD: {
      type: DataTypes.STRING(250),
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
    }
  }, {
    sequelize,
    tableName: 'SI_MOVIMIENTO_ALMACEN_DETA_TRX',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK__SI_MOVIMIENTO_AL__24F728C5",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "ID_SI_MOV_ALM" },
          { name: "ID_SI_MOV_ALM_DETA" },
        ]
      },
    ]
  });
};
