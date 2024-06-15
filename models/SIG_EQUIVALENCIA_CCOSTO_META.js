const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_EQUIVALENCIA_CCOSTO_META', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SEC_EJEC: {
      type: DataTypes.DECIMAL(6,0),
      allowNull: false,
      primaryKey: true
    },
    CENTRO_COSTO: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    SEC_FUNC: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    ORIGEN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    FUENTE_FINANC: {
      type: DataTypes.STRING(2),
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
    FASE_CUADRO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    ANO_PROG: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    CENTRO_COSTO_DEST: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    SEC_FUNC_DEST: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    FUENTE_FINANC_DEST: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    TIPO_TAREA_DEST: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    NIVEL_TAREA_DEST: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    CODIGO_TAREA_DEST: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    TIPO_USO_DEST: {
      type: DataTypes.STRING(1),
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
    }
  }, {
    sequelize,
    tableName: 'SIG_EQUIVALENCIA_CCOSTO_META',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_EQUIVALENCIA_CCOSTO",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SEC_EJEC" },
          { name: "CENTRO_COSTO" },
          { name: "SEC_FUNC" },
          { name: "ORIGEN" },
          { name: "FUENTE_FINANC" },
          { name: "TIPO_TAREA" },
          { name: "NIVEL_TAREA" },
          { name: "CODIGO_TAREA" },
          { name: "FASE_CUADRO" },
        ]
      },
    ]
  });
};
