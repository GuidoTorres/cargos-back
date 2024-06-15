const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TMP_VALIDA_PROG_ESTRATEGICO', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    FASE_CUADRO: {
      type: DataTypes.DECIMAL(1,0),
      allowNull: false,
      primaryKey: true
    },
    ESTRATEGIA_NACIONAL: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    FUNCION: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    SUB_PROGRAMA: {
      type: DataTypes.STRING(5),
      allowNull: false,
      primaryKey: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    FINALIDAD: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    UNIDAD_MEDIDA: {
      type: DataTypes.DECIMAL(3,0),
      allowNull: false,
      primaryKey: true
    },
    ESTADO: {
      type: DataTypes.STRING(1),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'TMP_VALIDA_PROG_ESTRATEGICO',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "PK_TMP_VALIDA_PROG_ESTR",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "FASE_CUADRO" },
          { name: "ESTRATEGIA_NACIONAL" },
          { name: "FUNCION" },
          { name: "PROGRAMA" },
          { name: "SUB_PROGRAMA" },
          { name: "ACT_PROY" },
          { name: "COMPONENTE" },
          { name: "FINALIDAD" },
          { name: "UNIDAD_MEDIDA" },
        ]
      },
    ]
  });
};
