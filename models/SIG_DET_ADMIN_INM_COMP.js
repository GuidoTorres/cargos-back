const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DET_ADMIN_INM_COMP', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DET_ADMINISTRATIVO',
        key: 'TIPO_PATRIMONIO'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DET_ADMINISTRATIVO',
        key: 'TIPO_PATRIMONIO'
      }
    },
    MES_EJE: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DET_ADMINISTRATIVO',
        key: 'TIPO_PATRIMONIO'
      }
    },
    TIPO_ACTO_ADM: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DET_ADMINISTRATIVO',
        key: 'TIPO_PATRIMONIO'
      }
    },
    TIPO_PATRIMONIO: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DET_ADMINISTRATIVO',
        key: 'TIPO_PATRIMONIO'
      }
    },
    NRO_MOVIMTO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DET_ADMINISTRATIVO',
        key: 'TIPO_PATRIMONIO'
      }
    },
    NRO_SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_DET_ADMINISTRATIVO',
        key: 'TIPO_PATRIMONIO'
      }
    },
    NRO_SECUENCIA_COMP: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: true
    },
    SEC_UNIDAD_ACTIVO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    SEC_COMPONENTE: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    VALOR_INICIAL_REV_COSTO_ORIG: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    DEPREC_ACUMUL_REV_COSTO_ORIG: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    VALOR_INICIAL_REV_AJUSTE_ORIG: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    DEPREC_ACUMUL_REV_AJUSTE_ORIG: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    VALOR_INICIAL_REV_COSTO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    DEPREC_ACUMUL_REV_COSTO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    VALOR_INICIAL_REV_AJUSTE: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    },
    DEPREC_ACUMUL_REV_AJUSTE: {
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
    AREA_TERRENO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'SIG_DET_ADMIN_INM_COMP',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_DET_ADM_INM_COMP",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "MES_EJE" },
          { name: "TIPO_ACTO_ADM" },
          { name: "TIPO_PATRIMONIO" },
          { name: "NRO_MOVIMTO" },
          { name: "NRO_SECUENCIA" },
          { name: "NRO_SECUENCIA_COMP" },
        ]
      },
    ]
  });
};
