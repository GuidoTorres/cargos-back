const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PROPUESTA_ITEM_DETALLE', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_ITEM',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_ITEM',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_GENERACION: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_ITEM',
        key: 'TIPO_GENERACION'
      }
    },
    PROCESO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_ITEM',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_PROCESO: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_ITEM',
        key: 'TIPO_GENERACION'
      }
    },
    CONVOCATORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_ITEM',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_CONVOCATORIA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_ITEM',
        key: 'TIPO_GENERACION'
      }
    },
    NRO_LOTE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_ITEM',
        key: 'TIPO_GENERACION'
      }
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_ITEM',
        key: 'TIPO_GENERACION'
      }
    },
    NRO_PROPUESTA: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_ITEM',
        key: 'TIPO_GENERACION'
      }
    },
    NRO_ITEM: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PROPUESTA_ITEM',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_DETALLE: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    RUBRO: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    ESPEC_TECNICAS: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    CONFORMIDAD: {
      type: DataTypes.STRING(1),
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
    tableName: 'SIG_PROPUESTA_ITEM_DETALLE',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_PROP_ITEM_DETA_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_GENERACION" },
          { name: "PROCESO" },
          { name: "SEC_PROCESO" },
          { name: "CONVOCATORIA" },
          { name: "SEC_CONVOCATORIA" },
          { name: "NRO_LOTE" },
          { name: "PROVEEDOR" },
          { name: "NRO_PROPUESTA" },
          { name: "NRO_ITEM" },
        ]
      },
      {
        name: "PK_SIG_PROPUESTA_ITEM_DETALLE",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_GENERACION" },
          { name: "PROCESO" },
          { name: "SEC_PROCESO" },
          { name: "CONVOCATORIA" },
          { name: "SEC_CONVOCATORIA" },
          { name: "NRO_LOTE" },
          { name: "PROVEEDOR" },
          { name: "NRO_PROPUESTA" },
          { name: "NRO_ITEM" },
          { name: "SEC_DETALLE" },
        ]
      },
    ]
  });
};
