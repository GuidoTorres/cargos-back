const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_REQ_ENTRADA_ALMACEN_DET', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_REQ_ENTRADA_ALMACEN',
        key: 'SEC_EJEC'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_REQ_ENTRADA_ALMACEN',
        key: 'SEC_EJEC'
      }
    },
    NRO_REQUERIM: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_REQ_ENTRADA_ALMACEN',
        key: 'SEC_EJEC'
      }
    },
    SEC_REQUERIM: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    GRUPO_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CLASE_BIEN: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    FAMILIA_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ITEM_BIEN: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    ACTIVO_FIJO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_MARCA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MARCA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    CANT_ARTICULO: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: 0
    },
    PRECIO_UNIT: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: 0
    },
    VALOR_TOTAL: {
      type: DataTypes.DECIMAL(16,4),
      allowNull: true,
      defaultValue: 0
    },
    ESPECIFICACIONES: {
      type: DataTypes.TEXT,
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
    }
  }, {
    sequelize,
    tableName: 'SIG_REQ_ENTRADA_ALMACEN_DET',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_REQENT_DET",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_REQUERIM" },
          { name: "SEC_REQUERIM" },
        ]
      },
    ]
  });
};
