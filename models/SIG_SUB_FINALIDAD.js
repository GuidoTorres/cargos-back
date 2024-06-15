const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SIG_SUB_FINALIDAD', {
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
    CADENA_FUNCIONAL: {
      type: DataTypes.STRING(50),
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
    NOMBRE_CORTO: {
      type: DataTypes.STRING(150),
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
    ACT_PROY: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    ID_SUB_FINALIDAD: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false,
      primaryKey: true
    },
    TRAZADOR: {
      type: DataTypes.STRING(1),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'SIG_SUB_FINALIDAD',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "ind_sff_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SUB_FINALIDAD" },
          { name: "ACT_PROY" },
        ]
      },
      {
        name: "ind_sff_02",
        fields: [
          { name: "ANO_EJE" },
          { name: "ACT_PROY" },
        ]
      },
      {
        name: "IND_SIG_SUB_FINALIDAD_01",
        fields: [
          { name: "ANO_EJE" },
          { name: "FINALIDAD" },
        ]
      },
      {
        name: "IND_sub_finalidad01",
        fields: [
          { name: "ANO_EJE" },
          { name: "SUB_FINALIDAD" },
        ]
      },
      {
        name: "PK_SUB_FINALIDAD",
        unique: true,
        fields: [
          { name: "ANO_EJE" },
          { name: "SUB_FINALIDAD" },
          { name: "ID_SUB_FINALIDAD" },
        ]
      },
    ]
  });
};
