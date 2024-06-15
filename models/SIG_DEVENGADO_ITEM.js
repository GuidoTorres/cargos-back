const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DEVENGADO_ITEM', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVENGADO_SECUENCIA',
        key: 'SEC_EJEC'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVENGADO_SECUENCIA',
        key: 'SEC_EJEC'
      }
    },
    NRO_DEVENGADO: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVENGADO_SECUENCIA',
        key: 'SEC_EJEC'
      }
    },
    SEC_DEVENGADO: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DEVENGADO_SECUENCIA',
        key: 'SEC_EJEC'
      }
    },
    SEC_ITEM: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
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
    CANT_ARTICULO: {
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
    FECHA_ENTRADA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FECHA_RECEPCION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PLAZO_ENTREGA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    DIAS_MULTA: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MULTA_DIARIA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MULTA_TOTAL: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: "CREATE DEFAULT SIGA_DEFAULT_0\r\n\tAS 0"
    },
    MULTA_FINAL: {
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
    }
  }, {
    sequelize,
    tableName: 'SIG_DEVENGADO_ITEM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_DEVENGADO_ITEM_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_DEVENGADO" },
          { name: "SEC_DEVENGADO" },
        ]
      },
      {
        name: "IND_DEVENGADO_ITEM_02",
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
        name: "PK_SIG_DEVENGADO_ITEM",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_DEVENGADO" },
          { name: "SEC_DEVENGADO" },
          { name: "SEC_ITEM" },
        ]
      },
    ]
  });
};
