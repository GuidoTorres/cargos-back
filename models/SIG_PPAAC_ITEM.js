const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PPAAC_ITEM', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPAAC_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPAAC_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_CONSOLID: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPAAC_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    NRO_CONSOLID: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPAAC_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_GENERACION: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPAAC_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    TIPO_BIEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPAAC_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_CONSOLID: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_PPAAC_SECUENCIA',
        key: 'TIPO_GENERACION'
      }
    },
    SEC_RESUMEN: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
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
    MES_01: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_02: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_03: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_04: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_05: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_06: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_07: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_08: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_09: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_10: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_11: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    MES_12: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: 0
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true,
      defaultValue: 0
    },
    PRECIO_UNIT: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: 0
    },
    VALOR: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    PRECIO_MONEDA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: 0
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
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
    CANT_TOTAL: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    CANT_TOTAL_ANNO_01: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    CANT_TOTAL_ANNO_02: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    CANT_TOTAL_ANNO_03: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    },
    PRECIO_MONEDA_PROGR: {
      type: DataTypes.DECIMAL(14,6),
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'SIG_PPAAC_ITEM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_PPAAC_ITEM_01",
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_BIEN" },
          { name: "GRUPO_BIEN" },
          { name: "CLASE_BIEN" },
          { name: "FAMILIA_BIEN" },
          { name: "ITEM_BIEN" },
        ]
      },
      {
        name: "IND_SIG_PPAAC_ITEM_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONSOLID" },
          { name: "NRO_CONSOLID" },
          { name: "TIPO_BIEN" },
          { name: "SEC_CONSOLID" },
          { name: "TIPO_GENERACION" },
        ]
      },
      {
        name: "PK_SIG_PPAAC_ITEM",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONSOLID" },
          { name: "NRO_CONSOLID" },
          { name: "TIPO_GENERACION" },
          { name: "TIPO_BIEN" },
          { name: "SEC_CONSOLID" },
          { name: "SEC_RESUMEN" },
        ]
      },
    ]
  });
};
