const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_POI_ASIGNA_TAREA', {
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
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    TIPO_TAREA: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    NIVEL_TAREA: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    CODIGO_TAREA: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    TIPO_CARGA: {
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
    }
  }, {
    sequelize,
    tableName: 'SIG_POI_ASIGNA_TAREA',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_SIG_POI_ASIGNA_TAREA",
        unique: true,
        fields: [
          { name: "SEC_EJEC" },
          { name: "ANO_EJE" },
          { name: "SEC_ASIGNA" },
          { name: "SEC_ACT_POI" },
          { name: "CENTRO_COSTO" },
          { name: "TIPO_TAREA" },
          { name: "NIVEL_TAREA" },
          { name: "CODIGO_TAREA" },
        ]
      },
    ]
  });
};
