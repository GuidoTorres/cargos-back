const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_POI_ASIGNA_CENTRO_COSTO', {
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_POI_ACCION_EST_CENTRO',
        key: 'SEC_EJEC'
      }
    },
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_POI_ACCION_EST_CENTRO',
        key: 'SEC_EJEC'
      }
    },
    SEC_ASIGNA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'SIG_POI_ACCION_EST_CENTRO',
        key: 'SEC_EJEC'
      }
    },
    SEC_ACT_POI: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_ACT_POI: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DESCRIPCION_ACT_POI: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    TIPO_ACT_POI: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    UNIDAD_MEDIDA_ACT_POI: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    META_FISICA_MES_ACT_POI: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    TIPO_PROY_POI: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NOMBRE_PROYECTO: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    TIPO_PROYECTO_SNIP: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ESTADO_PROY_POI: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    DOC_APRUEBA_VIABILIDAD: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    FECHA_DECLA_VIABILIDAD: {
      type: DataTypes.DATE,
      allowNull: true
    },
    PRESUP_PROY_POI: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    TIEMPO_MAX_PROY_POI: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    OBJETIVO_PROY_POI: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    UNIDAD_MEDIDA_PROY_POI: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: true
    },
    META_FISICA_MENS_PROY_POI: {
      type: DataTypes.DECIMAL(15,2),
      allowNull: true
    },
    ESTADO_CODIGO_ACT_POI: {
      type: DataTypes.STRING(1),
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
    FECHA_REG: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CUSER_ACT: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EQUIPO_ACT: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    FECHA_ACT: {
      type: DataTypes.DATE,
      allowNull: true
    },
    BENEFICIARIO: {
      type: DataTypes.STRING(250),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_POI_ASIGNA_CENTRO_COSTO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_POI_ASIGNA_CENTRO_COSTO",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "SEC_ASIGNA" },
          { name: "SEC_ACT_POI" },
        ]
      },
    ]
  });
};
