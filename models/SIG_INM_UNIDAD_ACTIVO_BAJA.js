const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_INM_UNIDAD_ACTIVO_BAJA', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_UNIDAD_ACTIVO',
        key: 'SECUENCIA'
      }
    },
    SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_UNIDAD_ACTIVO',
        key: 'SECUENCIA'
      }
    },
    SEC_UNIDAD_ACTIVO: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_INM_UNIDAD_ACTIVO',
        key: 'SECUENCIA'
      }
    },
    SEC_BAJA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_BAJA: {
      type: DataTypes.DECIMAL(2,0),
      allowNull: true
    },
    FECHA_BAJA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    NRO_RESOLUCION_BAJA: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    FECHA_RESOLUCION_BAJA: {
      type: DataTypes.DATE,
      allowNull: true
    },
    AREA_BAJA: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_COSTO: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    VALOR_AJUSTE_REV: {
      type: DataTypes.DECIMAL(16,2),
      allowNull: true
    },
    GLOSA_BAJA: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    ANO_BAJA: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    MES_BAJA: {
      type: DataTypes.STRING(2),
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
    FECHA_MOD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_MOD: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_MOD: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_INM_UNIDAD_ACTIVO_BAJA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_INM_UNIDAD_ACTIVO_BAJA",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "SEC_UNIDAD_ACTIVO" },
          { name: "SEC_BAJA" },
        ]
      },
    ]
  });
};
