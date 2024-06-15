const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INM_COMPONENTE_INSPEC', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_COMPONENTE',
        key: 'SECUENCIA'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_COMPONENTE',
        key: 'SECUENCIA'
      }
    },
    SEC_UNIDAD_ACTIVO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_COMPONENTE',
        key: 'SECUENCIA'
      }
    },
    SEC_COMPONENTE: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_COMPONENTE',
        key: 'SECUENCIA'
      }
    },
    SEC_INSPECCION: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    FECHA_INSPECCION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_DOCUMENTO: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MOTIVO: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    VALOR: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: false,
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
    }
  }, {
    sequelize,
    tableName: 'SIG_INM_COMPONENTE_INSPEC',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_INM_COMP_INSPE",
        fields: [
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "SEC_UNIDAD_ACTIVO" },
          { name: "SEC_COMPONENTE" },
        ]
      },
      {
        name: "PK_SIG_INM_COMP_INSPEC",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "SEC_UNIDAD_ACTIVO" },
          { name: "SEC_COMPONENTE" },
          { name: "SEC_INSPECCION" },
        ]
      },
    ]
  });
};
