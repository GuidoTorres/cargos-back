const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_ENCARGO_REQ_ITEM', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ENCARGO_REQ_DET',
        key: 'SEC_ENCARGO_REQ_DET'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ENCARGO_REQ_DET',
        key: 'SEC_ENCARGO_REQ_DET'
      }
    },
    SEC_ENCARGO_REQ: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ENCARGO_REQ_DET',
        key: 'SEC_ENCARGO_REQ_DET'
      }
    },
    SEC_ENCARGO_REQ_DET: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_ENCARGO_REQ_DET',
        key: 'SEC_ENCARGO_REQ_DET'
      }
    },
    SEC_ENCARGO_REQ_ITEM: {
      type: DataTypes.DECIMAL(6,0),
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
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    CANTIDAD: {
      type: DataTypes.DECIMAL(20,6),
      allowNull: true
    },
    PRECIO_UNIT: {
      type: DataTypes.DECIMAL(16,6),
      allowNull: true
    },
    MONTO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    MONEDA: {
      type: DataTypes.STRING(6),
      allowNull: true
    },
    TIPO_CAMBIO: {
      type: DataTypes.DECIMAL(10,6),
      allowNull: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(7),
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
    MONTO_MENSUAL_SNP: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    NRO_MESES_SNP: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    NRO_DIAS_SNP: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    FECHA_INICIO_SNP: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CARGO: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    FECHA_FIN_SNP: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PROVEEDOR: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: true
    },
    FLAG_PERSONALISIMO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    },
    FLAG_INFORME_TECNICO: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: "0"
    }
  }, {
    sequelize,
    tableName: 'SIG_ENCARGO_REQ_ITEM',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_ENCARGO_REQ_ITEM",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_ENCARGO_REQ" },
          { name: "SEC_ENCARGO_REQ_DET" },
          { name: "SEC_ENCARGO_REQ_ITEM" },
        ]
      },
    ]
  });
};
