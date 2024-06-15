const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_DETALLE_CONCESIONES', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONCESIONES',
        key: 'SEC_EJEC'
      }
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONCESIONES',
        key: 'SEC_EJEC'
      }
    },
    SEC_CONCESION: {
      type: DataTypes.DECIMAL(5,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONCESIONES',
        key: 'SEC_EJEC'
      }
    },
    MES_PROCESO: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_CONCESIONES',
        key: 'SEC_EJEC'
      }
    },
    NRO_SECUENCIA: {
      type: DataTypes.DECIMAL(8,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_PATRIMONIO: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TIPO_MODALIDAD: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: true
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
    CODIGO_ACTIVO: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    CODIGO_SINABIP: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    DESCRIPCION: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    MAYOR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    MAYOR_DEPR: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SUB_CTA_DEPR: {
      type: DataTypes.STRING(8),
      allowNull: true
    },
    CUSER_ID: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    EQUIPO_REG: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_DETALLE_CONCESIONES',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "IND_SIG_DET_CONCESION_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
        ]
      },
      {
        name: "IND_SIG_DET_CONCESION_03",
        fields: [
          { name: "SEC_EJEC" },
          { name: "TIPO_MODALIDAD" },
          { name: "SECUENCIA" },
        ]
      },
      {
        name: "IND_SIG_DET_CONCESION_04",
        fields: [
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "SEC_UNIDAD_ACTIVO" },
        ]
      },
      {
        name: "IND_SIG_DET_CONCESION_05",
        fields: [
          { name: "SEC_EJEC" },
          { name: "SECUENCIA" },
          { name: "SEC_UNIDAD_ACTIVO" },
          { name: "SEC_COMPONENTE" },
        ]
      },
      {
        name: "PK_SIG_DET_CONCESIONES",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "SEC_CONCESION" },
          { name: "MES_PROCESO" },
          { name: "NRO_SECUENCIA" },
        ]
      },
    ]
  });
};
