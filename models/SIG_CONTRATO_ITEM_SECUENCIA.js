const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_CONTRATO_ITEM_SECUENCIA', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM',
        key: 'TIPO_CONTRATO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM',
        key: 'TIPO_CONTRATO'
      }
    },
    TIPO_CONTRATO: {
      type: DataTypes.CHAR(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM',
        key: 'TIPO_CONTRATO'
      }
    },
    NRO_CONTRATO: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM',
        key: 'TIPO_CONTRATO'
      }
    },
    NRO_ITEM: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONTRATO_ITEM',
        key: 'TIPO_CONTRATO'
      }
    },
    SEC_ITEM: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true
    },
    ANO_PROCESO: {
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
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    CANTIDAD_ADJUDICA: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    PRECIO_MONEDA: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    VALOR_MONEDA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
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
    TIPO_MARCA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MARCA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_CONTRATO_ITEM_SECUENCIA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_CONT_ITEM_SEC_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONTRATO" },
          { name: "NRO_CONTRATO" },
          { name: "NRO_ITEM" },
        ]
      },
      {
        name: "IND_CONT_ITEM_SEC_02",
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
        name: "PK_SIG_CONTRATO_ITEM_SECUENCIA",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_CONTRATO" },
          { name: "NRO_CONTRATO" },
          { name: "NRO_ITEM" },
          { name: "SEC_ITEM" },
        ]
      },
    ]
  });
};
