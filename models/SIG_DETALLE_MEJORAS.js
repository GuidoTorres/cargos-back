const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DETALLE_MEJORAS', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MEJORAS',
        key: 'SECUENCIA'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MEJORAS',
        key: 'SECUENCIA'
      }
    },
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MEJORAS',
        key: 'SECUENCIA'
      }
    },
    NRO_MEJORA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_MEJORAS',
        key: 'SECUENCIA'
      }
    },
    SEC_MEJORA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    MOTIVO: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    ANO_ORDEN: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    NRO_ORDEN: {
      type: DataTypes.DECIMAL(7,0),
      allowNull: true
    },
    DOCUMENTO_REFER: {
      type: DataTypes.STRING(60),
      allowNull: true
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
    VALOR_MEJORA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    FECHA_REFER: {
      type: DataTypes.DATE,
      allowNull: true
    },
    FUENTE_INFOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_GASTO_POST: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    VALOR_SUSTITUCION: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    TIPO_AJUSTE_DETALLE: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_DETALLE_MEJORAS',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_DET_MEJORAS",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "NRO_MEJORA" },
          { name: "SEC_MEJORA" },
        ]
      },
    ]
  });
};
