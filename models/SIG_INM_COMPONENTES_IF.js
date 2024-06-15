const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INM_COMPONENTES_IF', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_UNIDAD_ACTIVO_IF',
        key: 'SECUENCIA'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_UNIDAD_ACTIVO_IF',
        key: 'SECUENCIA'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_UNIDAD_ACTIVO_IF',
        key: 'SECUENCIA'
      }
    },
    NRO_INVENTARIO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_UNIDAD_ACTIVO_IF',
        key: 'SECUENCIA'
      }
    },
    SEC_UNIDAD_ACTIVO: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_UNIDAD_ACTIVO_IF',
        key: 'SECUENCIA'
      }
    },
    SEC_COMPONENTE: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true
    },
    DENOMINACION: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    IND_VERIFICA: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    IND_SOBRANTE: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    IND_FALTANTE: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: "N"
    },
    OBSERVACIONES_1: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    OBSERVACIONES_2: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    OBSERVACIONES_3: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    CODIGO_ITEM: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    ESTADO_CONSERV: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_INM_COMPONENTES_IF',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_INM_COMP_IF",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "NRO_INVENTARIO" },
          { name: "SEC_UNIDAD_ACTIVO" },
        ]
      },
      {
        name: "PK_SIG_INM_COMP_IF",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "NRO_INVENTARIO" },
          { name: "SEC_UNIDAD_ACTIVO" },
          { name: "SEC_COMPONENTE" },
        ]
      },
    ]
  });
};
