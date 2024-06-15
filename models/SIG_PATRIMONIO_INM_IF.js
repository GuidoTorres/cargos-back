const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_PATRIMONIO_INM_IF', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_IF',
        key: 'SEC_EJEC'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_IF',
        key: 'SEC_EJEC'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true
    },
    NRO_INVENTARIO: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_IF',
        key: 'SEC_EJEC'
      }
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
    SEDE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    CODIGO_TIPO_INM: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    ESTADO_CONSERV: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    IND_INSTITUCIONAL: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    COD_MODALIDAD: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_PATRIMONIO_INM_IF',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_PAT_INM_IF_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "NRO_INVENTARIO" },
        ]
      },
      {
        name: "PK_SIG_PAT_INM_IF",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "NRO_INVENTARIO" },
        ]
      },
    ]
  });
};
