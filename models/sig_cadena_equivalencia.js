const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sig_cadena_equivalencia', {
    ANO_EJE: {
      type: DataTypes.DECIMAL(4,0),
      allowNull: false,
      primaryKey: true
    },
    ESTRATEGIA_NACIONAL: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    FUNCION: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    PROGRAMA: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    SUB_PROGRAMA: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    ACT_PROY: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    COMPONENTE: {
      type: DataTypes.STRING(7),
      allowNull: false,
      primaryKey: true
    },
    FINALIDAD: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    ESTRATEGIA_NACIONAL_N: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    FUNCION_N: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    PROGRAMA_N: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    SUB_PROGRAMA_N: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    ACT_PROY_N: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    COMPONENTE_N: {
      type: DataTypes.STRING(7),
      allowNull: true
    },
    FINALIDAD_N: {
      type: DataTypes.STRING(5),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sig_cadena_equivalencia',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "pk_sig_cadena_equivalencia",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "ESTRATEGIA_NACIONAL" },
          { name: "FUNCION" },
          { name: "PROGRAMA" },
          { name: "SUB_PROGRAMA" },
          { name: "ACT_PROY" },
          { name: "COMPONENTE" },
          { name: "FINALIDAD" },
        ]
      },
    ]
  });
};
