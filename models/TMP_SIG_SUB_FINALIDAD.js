const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_SIG_SUB_FINALIDAD', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    SUB_FINALIDAD: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    SECUENCIA: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    NOMBRE: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    FINALIDAD: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: true
    },
    PROGRAMA_INSTITUCIONAL: {
      type: DataTypes.STRING(6),
      allowNull: false
    },
    ESTADO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TIPO_ESTRATEGIA: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Act_Proy: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ID_SUB_FINALIDAD: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    version: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CAT1: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CAT2: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CAT3: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CAT4: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CAT5: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CAT6: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CAT7: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CAT8: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CAT9: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CAT10: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CAT11: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CAT12: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CAT13: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CAT14: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CAT15: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    CAT16: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    TRAZADOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    TAREA_TIPO: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TAREA_NIVEL: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    TAREA_GENERAL: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: true
    },
    F_GENERACION: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CAT99: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    FUNCION: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'TMP_SIG_SUB_FINALIDAD',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TMP_SIG_SUB_FINALIDAD",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SUB_FINALIDAD" },
          { name: "SECUENCIA" },
        ]
      },
    ]
  });
};
